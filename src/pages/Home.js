import { useEffect } from "react";
import ParallaxTop from "../components/ParallaxTop";
import ParallaxMiddle from "../components/ParallaxMiddle";
import ParallaxBottom from "../components/ParallaxBottom";
import Skills from "../components/Skills";
import Project from "../components/Project";
import AboutMe from "../components/AboutMe";
import Connect from "../components/Connect";
import ContactMe from "../components/ContactMe";
import Resume from "../components/Resume";

function Home(props) {

    useEffect(() => {
        document.title = "Home | Ryan Rotman"
    }, []);

    return (
        <div>
            {/* top parallax element */}
            <ParallaxTop />

            {/* project section */}
            <div className="container center-align" id="home-project-container">
                <div id="project-cards">
                    <Project
                    project={props.project[0]}
                    />
                    <Project
                    project={props.project[1]}
                    />
                    <Project
                    project={props.project[2]}
                    />
                    <Project
                    project={props.project[3]}
                    />
                    <Project
                    project={props.project[4]}
                    />
                    <Project
                    project={props.project[5]}
                    />
                </div>
            </div>

            {/* middle parallax element */}
            <ParallaxMiddle />

            {/* about me section */}
            <div className="container" id="home-about-container">
                <div className="row">
                    <AboutMe />
                </div>
            </div>

            {/* bottom parallax element */}
            <ParallaxBottom />

            {/* skills and connect section */}
            <div className="container" id="home-skills-contact-container">
                <div className="row">
                    <div className="col l9 s12">
                        <Skills />
                    </div>
                    <div className="col l3 s12">
                        <div className="row">
                            <div className="col s12">
                                <Connect />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <ContactMe />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <Resume />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;