import './visionandmission.css';

const VisionAndMission = () => {
    return (
        <>
            <div className='visionmission-container'>
                <div style={{
                    backgroundImage: `url('./cloudedesign/aboutus/Vision.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }} className="visionmission-content-container">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div className="visionmission-title">
                            <h1 className="title-text">
                                Vision
                            </h1>
                        </div>

                        <div className="visionmission-content">
                        <span className="visionmission-description">
                            Were dedicated to driving continuous innovation.
                            By combining advanced software development with strategic consulting,
                            we deliver powerful solutions that maximize business potential and promote sustainable growth.
                        </span>
                        </div>
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url('./cloudedesign/aboutus/Mission.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }} className="visionmission-content-container">
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div className="visionmission-title">
                            <h1 className="title-text">
                                MISSION
                            </h1>
                        </div>

                        <div className="visionmission-content">
                        <span className="visionmission-description">
                            Our mission is to empower businesses with custom-built,
                            scalable technology solutions tailored to their unique needs.
                            Through services like Custom Web App Development,
                            Word-Press Development, E-Commerce Development, Business Process Automation,
                            and Custom Business Portals, we build.
                            lasting partnerships with our clients,
                            fueled by industry expertise and a relentless commitment to excellence.
                        </span>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default VisionAndMission;