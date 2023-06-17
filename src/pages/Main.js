import Header from "../components/Header";
import FloatingDiv from "../components/FloatingDiv";
import "./Main.css";

export default function Main () {
    return (
        <div className="App">
            <Header />
            <section className="h-wrapper">
            <div className="profile flexCenter paddings innerWidth h-container">
                <div className="p-left">
                    <div className="p-description">
                        <span>Passionate to design and create it.</span>
                        <span>an enthusiastic UI/UX designer and front-end engineer specializing in website and mobile design. My passion lies in creating visually appealing interfaces that enhance user experiences. With a strong technical foundation, I seamlessly bring designs to life, ensuring both aesthetics and functionality.  My thrives in collaborative environments and is committed to delivering innovative and user-centric solutions.</span>
                    </div>
                    <button className="button p-button">
                        <span className="p-button-text">Connect with Me</span>
                    </button>
                </div>
                <div className="p-right">
                    <img src="./assets/Ellipse.png"/>
                    <img src="./assets/Photo.png"/>
                    <img src="./assets/Title1.png"/>
                    <img src="./assets/Title2.png"/>
                    {/* <div style={{top: '-4%', left:'32%'}}>
                        <FloatingDiv image={'./assets/Title1.png'} altText='Title 1'/>
                    </div>
                    <div style={{top: '-10rem', left: '18rem'}}>
                        <FloatingDiv image={'./assets/Title2.png'} altText='Title 2'/>
                    </div> */}
                    <div className="p-board">
                        <span>Hi, I'm Noval</span><br />
                        <span>UI/UX Designer & Front-end Developer</span>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}