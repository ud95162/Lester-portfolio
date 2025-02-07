import React, { useState } from "react";
import "./quote.css";
import { Dialog, DialogActions, DialogContent } from "@mui/material";

const Quote = ({ open, handleClose }) => {
    const [service, setService] = useState("");
    const [customService, setCustomService] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = () => {
        console.log("Form Data Submitted:", { ...formData, service: service === "Other" ? customService : service });
        handleClose(); // Close the modal after submission
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogContent>
                <div className="contact-form">
                    <div className="contact-form_field-wrapper" style={{marginTop : 0}}>
                        <span style={{ fontWeight: "600", display: "flex", justifyContent: "start" }}>Full Name</span>
                        <input
                            type="text"
                            placeholder="Type your name here"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                    </div>
                    <div className="contact-form-two_grids">
                        <div className="contact-form_field-wrapper">
                            <span style={{ fontWeight: "600", display: "flex", justifyContent: "start" }}>Email Address</span>
                            <input
                                type="text"
                                placeholder="Type your email here"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="contact-form_field-wrapper">
                            <span style={{ fontWeight: "600", display: "flex", justifyContent: "start" }}>Phone</span>
                            <input
                                type="text"
                                placeholder="Type your phone here"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Two-Column Grid for Required Service */}
                    <div className="contact-form_field-wrapper">
                        <span style={{ fontWeight: "600", display: "flex", justifyContent: "start" }}>Required Service</span>
                        <div className="radio-grid" onChange={(e) => setService(e.target.value)}>
                            <label>
                                <input type="radio" name="service" value="Business Website" style={{width: "10%"}}/> Business Website
                            </label>
                            <label>
                                <input type="radio" name="service" value="E-commerce Store" style={{width: "10%"}} /> E-commerce Store
                            </label>
                            <label>
                                <input type="radio" name="service" value="Portfolio/Personal Website" style={{width: "10%"}} /> Portfolio/Personal Website
                            </label>
                            <label>
                                <input type="radio" name="service" value="Other" style={{width: "10%"}} /> Other (Please specify)
                            </label>
                        </div>
                    </div>

                    {/* Show Input Field if "Other" is selected */}
                    {service === "Other" && (
                        <div className="contact-form_field-wrapper"  style={{marginTop : 0}}>
                            <input
                                type="text"
                                placeholder="Type your custom service here"
                                value={customService}
                                onChange={(e) => setCustomService(e.target.value)}
                            />
                        </div>
                    )}

                    <div className="contact-form_field-wrapper">
                        <span style={{ fontWeight: "600", display: "flex", justifyContent: "start" }}>Brief Description of Requirements</span>
                        <input
                            type="text"
                            placeholder="Type your message here"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>
                </div>
            </DialogContent>

            <DialogActions>
                <button
                    className="banner_header-button"
                    style={{ cursor: "pointer", marginLeft: "16px", color: "black", border: "1px solid" }}
                    onClick={handleClose}
                >
                    Cancel
                </button>
                <button
                    className="banner_quotes_button"
                    style={{ cursor: "pointer" }}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </DialogActions>
        </Dialog>
    );
};

export default Quote;
