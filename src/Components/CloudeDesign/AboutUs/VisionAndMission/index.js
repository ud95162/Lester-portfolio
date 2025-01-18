import './visionandmission.css';

const VisionAndMission = () => {
    return (
        <>
            <div className='visionmission-container'>
                <div style={{
                    backgroundImage: `url('./cloudedesign/aboutus/Vision.png')`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height:"89vh"
                }}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div className="visionmission-title">
                            <h1 className="title-text">
                                Vision
                            </h1>
                        </div>

                        <div className="visionmission-content">
                        <span className="visionmission-description">
                        We envision empowering businesses to thrive in a connected world through cutting-edge design, 
                        intelligent development, and sustainable digital solutions that inspire growth and redefine possibilities.
                        </span>
                        </div>
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url('./cloudedesign/aboutus/Mission.png')`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height:"89vh"
                }}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div className="visionmission-title">
                            <h1 className="title-text">
                                MISSION
                            </h1>
                        </div>

                        <div className="visionmission-content">
                        <span className="visionmission-description">
                        Our mission is to empower businesses by delivering cutting-edge web design and development solutions that prioritize innovation, user experience, and sustainability. 
                        We are committed to creating digital platforms that drive growth, foster meaningful connections, and adapt to the ever-evolving needs of the connected world.
                        </span>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default VisionAndMission;