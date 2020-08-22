
import React from "react";
import { Timeline, Events, UrlButton, ImageEvent, themes, createTheme } from "@merc/react-timeline";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button } from 'react-bootstrap';
// projects
import L_GetGitHubInfo from "../../assests/img/projects/get_github_info.webp";
import L_SmartBrain from "../../assests/img/projects/brain.webp";
import L_RoboFriends from "../../assests/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assests/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assests/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assests/img/skills/react.svg";
import L_Unix from "../../assests/img/skills/unix.jpg";
import L_R from "../../assests/img/skills/R_logo.webp";
import L_C from "../../assests/img/skills/c-lang.jpg";
import L_PYTHON from "../../assests/img/skills/python.svg";
import L_sqlLite from "../../assests/img/skills/SQLite.png";
import L_gMap from "../../assests/img/skills/googleMaps.png";
import L_hadoop from "../../assests/img/skills/hadoop.png";
import L_Java from "../../assests/img/skills/java.svg";
import L_Tomcat from "../../assests/img/skills/Tomcat.jpg";
import L_s3 from "../../assests/img/skills/aws-s3.png";
import L_ggplot from "../../assests/img/skills/ggplot.png";
import L_shiny from "../../assests/img/skills/shinyhex.jpg";
import L_Tensorflow from "../../assests/img/skills/Tensorflow_logo.svg";
import L_Keras from "../../assests/img/skills/Keras_logo.svg";
import L_jupyterNotebook from "../../assests/img/skills/Jupyter_logo.svg";
import L_Numpy from "../../assests/img/skills/numpy-icon.svg"
import L_matplotlib from "../../assests/img/skills/Matplotlib_icon.svg.png";
import L_NODE_JS from "../../assests/img/skills/nodejs.svg";
import L_EXPRESS from "../../assests/img/skills/express.svg";
import L_POSTGRESQL from "../../assests/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assests/img/skills/redux.svg";
import L_HTML5 from "../../assests/img/skills/html-5.svg";
import L_CSS3 from "../../assests/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assests/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assests/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assests/img/skills/digital-ocean.svg";
import L_GIT from "../../assests/img/skills/github-api.svg";

import styles from "./projects-timeline.styles.css";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

const TimeLine2 = () => {
    return (
        <div id="projects">
            <VerticalTimeline>
                {/* Project 1 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'transparent', color: '#fff', border: '1px #bfbfbf solid' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="Summer 2019"
                    iconStyle={{ background: '#13161B', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Recommendation of universities for students</h4>
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div style={{ background: '#13161B', color: '#FFF', paddingTop: '10px' }}>
                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} style={{ background: '#13161B' }} eventKey="0" className="p-2 text-center accordian-main">
                                        PROJECT DETAILS
                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body style={{ background: '#13161B' }}>
                                            <strong>Description:</strong>The goal of the project is to assist in recommending universities to students
                                <ColoredLine color="#fff" />
                                            <strong>Data Sources:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Students Data from consultancy</li>
                                                {/* <li></li> */}
                                            </ul>
                                            <ColoredLine color="#fff" />
                                            <strong>Features:</strong>
                                            <ul>
                                                <li>Developed a user-ready application which sources data from the consultancy containing the students profiles along with their test scores</li>
                                                <li>implemented KNN, SVM and NeuralNetwork algorithms to recommend the universities</li>
                                            </ul>
                                            <ColoredLine color="#fff" />
                                            <strong>Tech used:</strong>
                                            <ul>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_PYTHON} alt="Python" rounded className="image-style1 m-1"></Image> Python
                                            </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_Numpy} alt="Numpy" rounded className="image-style1 m-1"></Image> NumPy
                                            </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_Keras} alt="shiny" rounded className="image-style1 m-1"></Image> Keras
                                            </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_jupyterNotebook} alt="Jupyter notebook" rounded className="image-style1 m-1"></Image> Jupyter Notebook
                                            </span>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center sourceCode">
                            <Button className="" variant="dark" href="https://github.com/manish216/EDUWAYSS" >
                                SOURCE CODE
                        </Button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                {/* Project 2 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'transparent', color: '#fff', border: '1px #bfbfbf solid' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="Summer 2019"
                    iconStyle={{ background: '#13161B', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title"> OS </h4>
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div style={{ background: '#13161B', color: '#FFF', paddingTop: '10px' }}>
                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} style={{ background: '#13161B' }} eventKey="0" className="p-2 text-center accordian-main">
                                        PROJECT DETAILS
                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body style={{ background: '#13161B' }}>
                                            <strong>Description:</strong> A learning project to gain insight about working of an operating system
                                <ColoredLine color="#fff" />
                                            {/* <strong>Data Sources:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Twitter</li>
                                                <li>Common Crawl</li>
                                                <li>NYTimes</li>
                                            </ul>
                                            <ColoredLine color="#fff" /> */}
                                            <strong>Features:</strong>
                                            <ul>
                                                <li>Threads</li>
                                                <li>User Programs</li>
                                                <li>File System using priority donation and MLFQ’s thread scheduling with synchronization</li>
                                            </ul>
                                            <ColoredLine color="#fff" />
                                            <strong>Tech used:</strong>
                                            <ul>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_C} alt="C" rounded className="image-style1 m-1"></Image> C
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_Unix} alt="Unix" rounded className="image-style1 m-1"></Image> Unix
                                                    </span>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center sourceCode">

                            {/* <Button variant="dark">SEE LIVE</Button> */}
                            <Button className="" variant="dark" href="https://github.com/manish216/pintos-project2" >
                                SOURCE CODE
                            </Button>
                        </div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default TimeLine2;