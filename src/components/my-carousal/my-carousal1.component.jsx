import React, { Component } from "react";
import styles1 from './my-carousal1.module.css';
import styles from "./my-carousal.module.css";
import aboutMeVideo from "../../assests/video/aboutMeVideo.webm";
import Fade from 'react-reveal/Fade';

const SvgIcon_bottom = () => (
    <a className={styles1.scroll_up}>
        <span className={styles1.left_bar}></span>
        <span className={styles1.right_bar}></span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247 390" width="30px" height="70%" preserveAspectRatio="none">
            <line className={styles1.top} x1="0" y1="0" x2="120" y2="0" />
            <line className={styles1.left} x1="0" y1="40" x2="0" y2="-80" />
            <line className={styles1.bottom} x1="40" y1="40" x2="-80" y2="40" />
            <line className={styles1.right} x1="40" y1="0" x2="40" y2="1200" />
        </svg>
    </a>)


class MyCarousal1 extends Component {
    render() {
        return (
            <div>
                <div>
                <video autoplay="autoplay" loop muted className={styles.video} >
                    <source src={aboutMeVideo} type="video/mp4" />
                </video>
                    <Fade left delay={1000}>
                        <span ><SvgIcon_bottom /></span>
                    </Fade>

                </div>
            </div>
        );
    }
}

export default MyCarousal1;
