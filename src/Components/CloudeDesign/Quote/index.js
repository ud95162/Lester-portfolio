import React, {useEffect, useRef, useState} from "react";
import "./quote.css";
import ReactMarkdown from "react-markdown";
import {Dialog, DialogActions, DialogContent} from "@mui/material";

const Quote = ({open, handleClose}) => {
    const [service, setService] = useState("");
    const [customService, setCustomService] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [responseText, setResponseText] = useState(""); // Store streamed response
    const responseRef = useRef(null); // Ref for auto-scroll
    const [errors, setErrors] = useState({});

    // Auto-scroll when responseText updates
    useEffect(() => {
        if (responseRef.current) {
            responseRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [responseText]);

    // Reset state when modal is closed
    useEffect(() => {
        if (!open) {
            setService("");
            setCustomService("");
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                message: "",
            });
            setResponseText(""); // Clear response
            setErrors({});
        }
    }, [open]);

    // Validate fields before submitting
    const validateForm = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "*Full Name is required";
        if (!formData.email.trim()) newErrors.email = "*Email is required";
        if (!formData.phone.trim()) newErrors.phone = "*Phone number is required";
        if (!service.trim()) newErrors.service = "*Please select a service";
        if (service === "Other" && !customService.trim()) newErrors.customService = "*Please specify the service";
        if (!formData.message.trim()) newErrors.message = "*Please provide a brief description";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = async () => {
        if (!validateForm()) return; // Prevent submission if form is invalid

        // Create JSON object with form data
        const requestData = {
            clientName: formData.fullName,
            email: formData.email,
            contactNumber: formData.phone,
            businessName: service === "Other" ? customService : service, // Set "Other" service value
            businessDescription: formData.message,
        };
        setResponseText(""); // Clear previous response

        try {
            const response = await fetch("https://cloudedesign.com/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (!response.body) {
                throw new Error("ReadableStream not supported in this browser.");
            }

            // Readable stream processing
            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            let resultText = "";
            const processStream = async () => {
                while (true) {
                    const {done, value} = await reader.read();
                    if (done) break; // Stop when finished

                    const chunk = decoder.decode(value, {stream: true});
                    resultText += chunk;

                    setResponseText((prev) => prev + chunk); // Append streamed data to state
                }
            };

            await processStream(); // Start processing the stream
            console.log(response)
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again later.");
        }

        // console.log("Form Data Submitted:", requestData);
        // handleClose(); // Close the modal after submission
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogContent>
                {
                    !responseText && (
                        <div className="contact-form">
                            <div className="contact-form_field-wrapper" style={{marginTop: 0}}>
                                <span style={{fontWeight: "600", display: "flex", justifyContent: "start"}}>Full Name</span>
                                <input
                                    type="text"
                                    placeholder="Type your name here"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                />
                                {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                            </div>
                            <div className="contact-form-two_grids">
                                <div className="contact-form_field-wrapper">
                                    <span style={{
                                        fontWeight: "600",
                                        display: "flex",
                                        justifyContent: "start"
                                    }}>Email Address</span>
                                    <input
                                        type="text"
                                        placeholder="Type your email here"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                    {errors.email && <p className="error-text">{errors.email}</p>}
                                </div>
                                <div className="contact-form_field-wrapper">
                                    <span style={{fontWeight: "600", display: "flex", justifyContent: "start"}}>Phone</span>
                                    <input
                                        type="text"
                                        placeholder="Type your phone here"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                    {errors.phone && <p className="error-text">{errors.phone}</p>}

                                </div>
                            </div>

                            {/* Two-Column Grid for Required Service */}
                            <div className="contact-form_field-wrapper">
                                <span style={{
                                    fontWeight: "600",
                                    display: "flex",
                                    justifyContent: "start"
                                }}>Required Service</span>
                                <div className="radio-grid" onChange={(e) => setService(e.target.value)}>
                                    <label>
                                        <input type="radio" name="service" value="Business Website"
                                               style={{width: "10%"}}/> Business Website
                                    </label>
                                    <label>
                                        <input type="radio" name="service" value="E-commerce Store"
                                               style={{width: "10%"}}/> E-commerce Store
                                    </label>
                                    <label>
                                        <input type="radio" name="service" value="Portfolio/Personal Website"
                                               style={{width: "10%"}}/> Portfolio/Personal Website
                                    </label>
                                    <label>
                                        <input type="radio" name="service" value="Other" style={{width: "10%"}}/> Other
                                        (Please
                                        specify)
                                    </label>
                                </div>
                                {errors.service && <p className="error-text">{errors.service}</p>}

                            </div>

                            {/* Show Input Field if "Other" is selected */}
                            {service === "Other" && (
                                <div className="contact-form_field-wrapper" style={{marginTop: 0}}>
                                    <input
                                        type="text"
                                        placeholder="Type your custom service here"
                                        value={customService}
                                        onChange={(e) => setCustomService(e.target.value)}
                                    />
                                    {errors.customService && <p className="error-text">{errors.customService}</p>}
                                </div>
                            )}

                            <div className="contact-form_field-wrapper">
                                <span style={{fontWeight: "600", display: "flex", justifyContent: "start"}}>Brief Description of Requirements</span>
                                <input
                                    type="text"
                                    placeholder="Type your message here"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                                {errors.message && <p className="error-text">{errors.message}</p>}
                            </div>
                        </div>
                    )
                }

                {/* Display Streaming Markdown Response with Auto-Scroll */}
                {responseText && (
                    <div className="response-container">
                        <h4>How to Success your requirement:</h4>
                        <div className="markdown-content">
                            <ReactMarkdown>{responseText}</ReactMarkdown>
                        </div>
                        {/* This element will always be at the bottom and trigger scroll */}
                        <div ref={responseRef}></div>
                    </div>
                )}
            </DialogContent>

            <DialogActions>
                <button
                    className="banner_header-button"
                    style={{cursor: "pointer", marginLeft: "16px", color: "black", border: "1px solid"}}
                    onClick={handleClose}
                >
                    Cancel
                </button>
                {
                    !responseText && (
                        <button
                            className="banner_quotes_button"
                            style={{cursor: "pointer"}}
                            onClick={handleSubmit}
                        >
                            Get Suggestion from Us
                        </button>
                    )
                }
                {
                    responseText && (
                        <button
                            className="banner_quotes_button"
                            style={{cursor: "pointer"}}
                        >
                            Get Quote
                        </button>
                    )
                }

            </DialogActions>
        </Dialog>
    );
};

export default Quote;
