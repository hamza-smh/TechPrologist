import "./aboutUs.styles.scss"
import team from "./../../brand/assets/https_/lottiefiles.com/teamnobkg.png";
import GetStartedButton from "../get-started-button/getStartedbutton";

const AboutUs = () => {

    return (
        <>
            <section id="aboutUs" className="aboutUs section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row-container">

                        <div className="aboutUs-text">
                            <div className="content">
                                <h5>About Us</h5>
                                <h3><strong>We are experts in SaaS Development</strong> </h3>
                                <p>
                                    Welcome to Techprologist, 
                                    where innovation meets dedication. 
                                    We are a team of passionate problem-solvers committed to delivering exceptional 
                                    software solutions tailored to meet your needs.
                                </p>
                                <p>
                                    Our focus lies in creating cutting-edge SaaS products and beautifully crafted 
                                    standalone websites that not only work seamlessly but also stand out.
                                </p>
                                <p>
                                    Beyond our commitment to excellence, we take pride in fostering growth and nurturing 
                                    talent. Our team comprises young graduates and aspiring professionals who bring fresh 
                                    perspectives and creative energy to every project.
                                     We believe in empowering individuals to reach their full potential, creating a 
                                     ripple effect of opportunity and growth.
                                </p>
                                <p>
                                    At Techprologist, every line of code is a step toward our goal of providing
                                    top-notch service and exceeding expectations. 
                                    Let’s build the future together.
                                </p>
                                {/* <p>
                                    Click onto our <strong>Portfolio</strong> to check them out.
                                </p> */}
                                {/* <div className="button">
                                    <GetStartedButton className="explore" buttonType="solid" buttonText="Explore Now" />
                                </div> */}
                            </div>

                        </div>
                        <div className="img"  >
                            <img src={team} className="aboutUs-img" alt="ABOUT_US" />
                            <div className="rectangle"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default AboutUs;