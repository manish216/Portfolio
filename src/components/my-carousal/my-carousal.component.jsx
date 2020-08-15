import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assests/img/carousal/slide1.jpg";
import Slide2 from "../../assests/img/carousal/slide1.jpg";
import Slide3 from "../../assests/img/carousal/slide1.jpg";
import ScrollDown from "../scroll-down/scroll-down.component";
import  styles from "./my-carousal.module.css";
import World from "../../assests/video/World-1992.mp4";
class MyCarousal extends Component {
    render() {
        return (
            <div id="home">
                {/* <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
                    <Carousel.Item> */}
                        {/* <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" /> */}
                        <video autoplay="autoplay" loop muted className={styles.video} >
                            <source src={World} type="video/mp4" />
                        </video>
                    {/* </Carousel.Item> */}
                    {/* <Carousel.Item>
                        <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
                    </Carousel.Item> */}
                {/* </Carousel> */}

            </div>
        );
    }
}

export default MyCarousal;
