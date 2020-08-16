import React, { Component } from 'react';
import styles from './HeroSection.module.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProfilePicture from '../profilePicture/profilePicture.component';
import ScrollAnimation from 'react-animate-on-scroll';


const HeroSection = () => {

    return (
        <div className={styles.heroSection}>
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                    <div>
                        <p className={styles.paragraph}>
                        I am a recent Computer science master's graduate from University at Buffalo.
                        Prior to joining this university, I had experience in developing software applications for different clients as a freelancer.
                        While working as a freelancer and meeting several clients, I developed an enthusiasm for data analytics and artificial intelligence which lead me to gain knowledge in the following fields in my master studies.
                        </p>
                    </div>
                    </Col>
                    <Col>
                        <ScrollAnimation animateIn="bounceInRight">
                            <h1 className={styles.aboutmeHeading}>ABOUT ME </h1>
                        </ScrollAnimation>
                        <div className={styles.svgParallax}>
                        <ProfilePicture />
                        </div>
                    </ Col>
                </Row>
            </ Container>
        </ Jumbotron>
        </div>
    );
};

export default HeroSection;