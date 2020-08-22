import React, { Component } from 'react';
import styles from './HeroSection.module.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import educationVideo from '../../assests/video/educationVideo.mp4';
import ScrollAnimation from 'react-animate-on-scroll';


const HeroSection = () => {

    return (
        <div className={styles.heroSectionEducation}>
        <Jumbotron className={styles.body}>
            <Container>
                <Row>
                    <Col>
                    <div className={styles.masters}>
                        <Fade right delay={2000}>
                            <p className={styles.paragraph}>
                                <h2 className={styles.universityName}> State University of Newyork at Buffalo  </h2>
                                Master's : Computer Science and Engineering <br />
                                Year : 2018-2020
                            </p>
                        </Fade>
                        <Fade down delay={2500}>
                            <span className={styles.ub}></span>
                        </Fade>
                    </div>
                    </Col>
                    <Col>
                        <ScrollAnimation animateIn="bounceInRight">
                                <video autoplay="autoplay" loop muted className={styles.video} >
                                    <source src={educationVideo} type="video/mp4" />
                                </video>
                        </ScrollAnimation>
                    </ Col>
                    <Col>
                        <div className ={styles.bachelors}>
                            <Fade up delay={2500}>
                                <span className={styles.au}></span>
                            </Fade>
                            <Fade left delay={2000}>
                                <p className={styles.paragraph}>
                                    <h2 className={styles.universityName}> Anna University</h2>
                                Bachelor's : Electronics and Communication Engineering <br />
                                Year : 2014-2017
                            </p>
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </ Container>
        </ Jumbotron>
        </div>
    );
};

export default HeroSection;