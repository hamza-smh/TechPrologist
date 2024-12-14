import React from "react";
import "./container.styles.scss";

import hero from "../../brand/assets/https_/lottiefiles.com/website.png";
import background from "../../brand/assets/https_/lottiefiles.com/coder.jpg";
import GetStartedButton from "../get-started-button/getStartedbutton";
import Navigation from "../navigation/navigation";

const Container = () =>{
    return(
        <section id="contain" >
             
            <Navigation />
            <img src= {background} className="containImage" />
            <div className="container">
                <div className="row">
                    <div className="holder col-lg-6  pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h3>Welcome to Techprologist.</h3>
                        <h1>
                            Shaping the future of software with innovative SaaS offerings and personalized projects crafted to suit your specific requirements.</h1>
                        {/* <h2>We are team of talented technology enthusiasts helping business with digital automation</h2> */}
                        <div className="links">
                             < GetStartedButton buttonType = "solid" href="#services" buttonText="Browse Services"/>
                        </div>
                    </div>
                    <div className="holder col-lg-6 order-1 order-lg-2 ">
                        <img src={hero}  className="hero-img " alt=""/>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Container;