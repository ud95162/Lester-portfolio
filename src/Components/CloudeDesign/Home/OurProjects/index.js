import './ourprojects.css';
import React, {useState, useEffect, useMemo} from "react";

const OurProjects = () => {

    const projects = useMemo( () =>
    [
        {
            image: "/cloudedesign/ourprojects/projects-01.png",
            description: "Metro Pulse (Pvt) Ltd delivers innovative tech products and services in Sri Lanka, specializing in web design, development, and e-commerce solutions tailored to your business needs.",
            url: "https://metroplus.lk"
        },
        {
            image: "/cloudedesign/ourprojects/stromx.png",
            description: "Our expertise ensures a seamless user experience, optimized functionality, and a strong digital presence to elevate your brand in the tech industry.",
            url: "https://stormx.global/"
        },
        {
            image: "/cloudedesign/ourprojects/ipermit_.png",
            description: "Ipermit Ltd delivers innovative company web provide web design service for coporate needs.",
            url: "https://www.ipermitusa.com/"
        },
        {
            image: "/cloudedesign/ourprojects/playhouse.png",
            description: "PlayHouse.org offers professional website development and seamless registration systems to streamline your organization's online presence and user management.",
            url: "https://playhouse.lk"
        },
        {
            image: "/cloudedesign/ourprojects/laptopcare.png",
            description: "Laptop Care (Pvt) Ltd provides cutting-edge tech solutions in Sri Lanka, specializing in laptop services, SEO optimization, Google search ad campaigns, web design, and e-commerce solutions to elevate your business.",
            url: "https://laptopcare.lk"
        },
        {
            image: "/cloudedesign/ourprojects/geegstore.png",
            description: "Geegstore specializes in web design, development, and tailored e-commerce solutions to help businesses thrive in the digital marketplace.",
            url: "https://geegstore.lk"
        },
        {
            image: "/cloudedesign/ourprojects/natbound.png",
            description: "Natbound.lk provides professional web design and development services using Next.js, creating fast, visually stunning, and user-friendly websites tailored for travel companies",
            url: "https://natbound.lk/"
        },
        {
            image: "/cloudedesign/ourprojects/studiocloudy.png",
            description: "Studio Cloudy offers professional web design and development services tailored for wedding photographers, creating stunning, user-friendly websites to showcase your work beautifully.",
            url: "https://studiocloudy.com/"
        },
        {
            image: "/cloudedesign/ourprojects/mymedweb.png",
            description: "We provide tailored e-commerce web solutions for MyMed (Pvt) Ltd, enabling seamless online operations and enhanced customer experiences.",
            url: "https://mymed.lk"
        },
        {
            image: "/cloudedesign/ourprojects/poolguard.png",
            description: "We provide web development solutions for Poolguard.au.co, an Australian pool service company based in Western Australia, ensuring a professional online presence and user-friendly functionality.",
            url: "https://poolguardwa.com.au/"
        },
        {
            image: "/cloudedesign/ourprojects/tc.png",
            description: "We provide web design services for Trafford Ceylon (Pvt) Ltd, a Sri Lankan tea export company with operations in the USA, creating elegant and professional websites to showcase their global presence.",
            url: "https://traffordceylon.lk/"
        },
        {
            image: "/cloudedesign/ourprojects/projects-02.png",
            description: "We provide professional UI design services for power solution companies in the UK, crafting modern, intuitive, and user-friendly interfaces. Our designs enhance user engagement, simplify navigation, and effectively showcase energy solutions, ensuring a seamless digital experience for customers and stakeholders.",
            url: "https://marvelapp.com/prototype/fhab9c3/screen/96371945"
        },
        {
            image: "/cloudedesign/ourprojects/projects-03.png",
            description: "Our solutions streamline product showcasing, ordering, and transactions, ensuring a seamless digital experience that enhances efficiency and drives business growth.",
            url: "https://marvelapp.com/prototype/fhab9c3/screen/96371932"
        },
        {
            image: "/cloudedesign/ourprojects/projects-05.png",
            description: "We provide professional UI design services for solar companies in the UK, crafting modern, user-friendly interfaces that enhance engagement and showcase renewable energy solutions effectively. Our designs prioritize clarity, sustainability, and seamless navigation to create a compelling digital experience for your audience.",
            url: "https://marvelapp.com/prototype/fhab9c3/screen/96372008"
        },
        {
            image: "/cloudedesign/ourprojects/miracalagroproject.png",
            description: "We provide corporate website solutions for Miracal Agro (Pvt) Ltd, a leading company in Sri Lanka's agriculture sector, delivering a professional online presence to enhance their brand and operations.",
            url: "https://miracleagro.lk/"
        },
        {
            image: "/cloudedesign/ourprojects/exsolproject.png",
            description: "We provide web design and development services for Exsol (Pvt) Ltd, an engineering company in Sri Lanka, creating innovative and functional websites to enhance their digital presence.",
            url: "https://exsol.lk"
        },
        {
            image: "/cloudedesign/ourprojects/kemyo2.png",
            description: "We provide web design and development services for Kemyo (Pvt) Ltd, an architecture company, creating visually striking and functional websites to showcase their expertise and projects.",
            url: "https://kemyo.lk"
        },
        {
            image: "/cloudedesign/ourprojects/spicyproject.png",
            description: "Project description",
            url: "https://spicesusa.com/"
        },
        {
            image: "/cloudedesign/ourprojects/giftopiya.png",
            description: "Our solutions are tailored to help businesses showcase and sell gifts effortlessly, ensuring seamless transactions and customer engagement.Our other web design for Costmatic retaling industry ",
            url: "https://giftopiya.com/"
        },
        {
            image: "/cloudedesign/ourprojects/cctvlk.png",
            description: "CCTV.lk offers professional e-commerce web design and development services, creating secure, high-performance online stores tailored for the surveillance industry. ",
            url: "https://cctv.lk/"
        },
        {
            image: "/cloudedesign/ourprojects/teacompanyui.png",
            description: "We provide professional UI design services for tea exporting companies, crafting visually appealing and user-friendly interfaces that highlight premium tea products. Our designs ensure seamless navigation, engaging storytelling, and a strong brand presence to attract global buyers and enhance the digital experience. ",
            url: "https://marvelapp.com/prototype/fhab9c3/screen/96372033"
        },
        {
            image: "/cloudedesign/ourprojects/teacompanywebdesign.png",
            description: "We provide professional UI design services for tea companies in the USA, creating visually captivating and user-friendly interfaces that enhance the online shopping experience. Our designs blend elegance with functionality, ensuring seamless navigation and a strong brand identity that resonates with tea enthusiasts. ",
            url: "https://marvelapp.com/prototype/fhab9c3/screen/96372069"
        },
        {
            image: "/cloudedesign/ourprojects/navitea.png",
            description: "We provide professional UI design services for Navi Tea, creating a visually elegant and user-friendly website to showcase premium tea exports. Our designs focus on seamless navigation, rich storytelling, and an immersive brand experience, ensuring a captivating digital presence that appeals to global tea buyers.  ",
            url: "https://marvelapp.com/prototype/fhab9c3/screen/96372027"
        },
        {
            image: "/cloudedesign/ourprojects/sennya.png",
            description: "We provide web design and comprehensive digital marketing solutions for Sennya Resort (Pvt) Ltd, a luxury resort in Belihuloya, Sri Lanka, enhancing their online presence and guest engagement.",
            url: "https://sennyaresorts.com/"
        }
    ], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Preload all images when the component mounts
    useEffect(() => {
        projects.forEach((project) => {
            const img = new Image();
            img.src = project.image;
        });
    }, []);

    const preloadImage = (index) => {
        const img = new Image();
        img.src = projects[index].image;
    };

    const handleNextProject = () => {
        setIsAnimating(true);
        const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

        preloadImage(nextIndex); // Preload next image

        setTimeout(() => {
            setCurrentIndex(nextIndex);
            setIsAnimating(false);
        }, 0);
    };

    const handlePreviousProject = () => {
        setIsAnimating(true);
        const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

        preloadImage(prevIndex); // Preload previous image

        setTimeout(() => {
            setCurrentIndex(prevIndex);
            setIsAnimating(false);
        }, 0);
    };

    const currentProjectImage = useMemo(() => {
        return (
            <img
                src={projects[currentIndex].image}
                alt={`proj-${currentIndex + 1}`}
                onClick={() => window.open(projects[currentIndex].url, '_blank', 'noopener,noreferrer')}
            />
        );
    }, [currentIndex, projects]);

    return (
        <>
            <div className="projects_container">
                <div className="projects_header">
                    <h3 style={{ margin: 0, color: "white" }}>Our Recent Projects</h3>
                    <h1 style={{ color: "white" }} className='project_header'>
                        OUR SUCCESS&nbsp;
                        <span
                            style={{
                                background: "linear-gradient(to right, #ebb500, #ec5b12)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: "600",
                            }} className='project_header'
                        >
                            STORIES
                        </span>
                    </h1>
                </div>

                <div className="projects_wrapper-container">
                    <div className="projects_wrapper">
                        {/* Left Arrow */}
                        <div
                            style={{ display: "flex", justifyContent: "start", alignItems: "center" }}
                            onClick={handlePreviousProject}
                        >
                            <img
                                src="/cloudedesign/icons/right-arrow.svg"
                                alt="left-arrow"
                                style={{
                                    transform: "rotate(180deg)",
                                    cursor: "pointer",
                                    color: "white",
                                    width: "80px",
                                }}
                            />
                        </div>

                        {/* Current Project */}
                        <div
                            className={`projects_image-container ${
                                isAnimating ? "fade" : ""
                            }`} // Add fade animation
                        >
                            {currentProjectImage}
                        </div>

                        {/* Right Arrow */}
                        <div
                            style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
                            onClick={handleNextProject}
                        >
                            <img
                                src="/cloudedesign/icons/right-arrow.svg"
                                alt="right-arrow"
                                style={{ cursor: "pointer", width: "80px" }}
                            />
                        </div>
                    </div>

                    <div className="projects-bottom-span">
                        <span className="projects-bottom-span-text">
                            {projects[currentIndex].description}
                        </span>
                        <button
                            className="summary_about-btn"
                            style={{ cursor: "pointer", marginTop: "0" }}
                            onClick={() => window.open(projects[currentIndex].url, '_blank', 'noopener,noreferrer')}
                        >
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurProjects;
