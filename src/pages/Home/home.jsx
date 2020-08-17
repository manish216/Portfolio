
import React, { Component,useState,useEffect } from "react";
import MyCarousal from "../../components/my-carousal/my-carousal.component";
import MyCarousal1 from "../../components/my-carousal/my-carousal1.component";
import MyTitleMessage from "../../components/title-message/title-message.component";

//profile Picture
import ExampleComponent from "react-rounded-image";
import profilePictureImage from '../../assests/img/profile/linkedin-photo.jfif';
import styles from  './home.module.css';
import ProfilePicture from "../../components/profilePicture/profilePicture.component";
import HeroSection from '../../components/HeroSection/HeroSection.components';
import Fade from 'react-reveal/Fade';


import aboutMeVideo from '../../assests/video/aboutMeVideo.webm';






class Home extends Component {

    render() {
        return (
            <div className={styles.pageBackground}>
                <div>
                    <MyCarousal />
                    <div className={styles.Content}>

                        <ExampleComponent
                            image={profilePictureImage}
                            roundedColor="#FFF"
                            imageWidth="200"
                            imageHeight="200"
                            roundedSize="10"
                        />

                    </div>
                    <MyTitleMessage />

                </div>
                <div className={styles.About_me}>
                    <MyCarousal1 />
                    <div className={styles.about_content}>
                        <HeroSection />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
