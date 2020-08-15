
import React, { Component,useState,useEffect } from "react";
import MyCarousal from "../../components/my-carousal/my-carousal.component";
import MyTitleMessage from "../../components/title-message/title-message.component";

//profile Picture
import ExampleComponent from "react-rounded-image";
import profilePictureImage from '../../assests/img/profile/linkedin-photo.jfif';
import styles from  './home.module.css';
import ProfilePicture from "../../components/profilePicture/profilePicture.component";




class Home extends Component {

    render() {
        return (
            <div className={styles.Home}>
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
        );
    }
}

export default Home;
