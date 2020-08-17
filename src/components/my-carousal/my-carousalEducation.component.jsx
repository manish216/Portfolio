import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assests/img/carousal/slide1.jpg";
import Slide2 from "../../assests/img/carousal/slide1.jpg";
import Slide3 from "../../assests/img/carousal/slide1.jpg";

import styles from "./my-carousal.module.css";
import educationVideo from "../../assests/video/educationVideo.mp4";
import Fade from 'react-reveal/Fade';

// SVG ICONS
// <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
{/* <path id="wheel" d="M123.359,79.775l0,72.843" style="fill:none;stroke:#fff;stroke-width:20px;" /> */ }
//
// </svg >
// <p>Scroll down</p>
const SvgIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247 390" width="30px" height="70%" preserveAspectRatio="none">
    <g transform="translate(0,0)">
        <path className={styles.wheel} d="M123.359,79.775l0,72.843" fill="#FFF" stroke="#FFF" stroke-width="7px" />
        <path className={styles.mouse} fill="none" stroke="#fff" stroke-width="7px" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" />
    </g>
</svg>)




class MyCarousalEducation extends Component {
    render() {
        return (

            <div>
                <video autoplay="autoplay" loop muted className={styles.video} >
                    <source src={educationVideo} type="video/mp4" />
                </video>
                <div className={styles.scroll_button}>
                    <Fade right delay={2000}>
                        <h2 className={styles.scrollDownText}> Scroll  </h2>
                    </Fade>
                    <Fade top delay={2000}>
                        <SvgIcon />
                    </Fade>
                    <Fade left delay={2000}>
                        <h2 className={styles.scrollDownText}> Down </h2>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default MyCarousalEducation;
