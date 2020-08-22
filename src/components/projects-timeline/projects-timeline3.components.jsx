
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
import L_R from "../../assests/img/skills/R_logo.webp";
import L_PYTHON from "../../assests/img/skills/python.svg";
import L_sqlLite from "../../assests/img/skills/SQLite.png";
import L_gMap from "../../assests/img/skills/googleMaps.png";
import L_hadoop from "../../assests/img/skills/hadoop.png";
import L_Java from "../../assests/img/skills/java.svg";
import L_Tomcat from "../../assests/img/skills/Tomcat.jpg";
import L_s3 from "../../assests/img/skills/aws-s3.png";
import L_ggplot from "../../assests/img/skills/ggplot.png";
import L_colab from "../../assests/img/skills/colab.png";
import L_Flask from "../../assests/img/skills/flask.svg";
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

const TimeLine3 = () => {
    return (
        <div id="projects">
            <VerticalTimeline>
                {/* Project 1 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'transparent', color: '#fff', border: '1px #bfbfbf solid' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="Fall 2019"
                    iconStyle={{ background: '#13161B', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Text recognition for forensic analysis</h4>
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div style={{ background: '#13161B', color: '#FFF', paddingTop: '10px' }}>
                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} style={{ background: '#13161B' }} eventKey="0" className="p-2 text-center accordian-main">
                                        PROJECT DETAILS
                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body style={{ background: '#13161B' }}>
                                            <strong>Description:</strong>On-going research to reduce the turn around time for forensic teams by analysing the hand written samples at the crime scenes using machine learning models
                                <ColoredLine color="#fff" />
                                            {/* <strong>Data Sources:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Twitter</li>
                                                <li>CDC</li>
                                            </ul>
                                            <ColoredLine color="#fff" /> */}
                                            <strong>Features:</strong>
                                            <ul>
                                                <li>Analyze Handwritting samples</li>
                                                <li>Visually Explain to the User, why the model made that choice</li>
                                            </ul>
                                            <strong>Models:</strong>
                                            <ul>
                                                <li>Feature Learning Network (FLN)   : To extract the features and soft-probabilites from the image files</li>
                                                <li>Convolution Neural Network (CNN) : To assist Human Examiners in detecting authentic and forged hand written samples</li>
                                                <li>Probability Graphical Models(PGM): To explain the decision made by CNN </li>
                                                <li>GradCAM : To visually explain the decision made by CNN</li>
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
                                                        <Image src={L_Keras} alt="Keras" rounded className="image-style1 m-1"></Image> Keras
                                            </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_Numpy} alt="NumPy" rounded className="image-style1 m-1"></Image> NumPy
                                            </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_colab} alt="Jupyter notebook" rounded className="image-style1 m-1"></Image> Google Colab
                                            </span>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center sourceCode">
                            <Button className="" variant="dark" href="https://github.com/manish216/CSE-674-Project3" >
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
                    date="Fall 2019"
                    iconStyle={{ background: '#13161B', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title"> Explainable AI </h4>
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div style={{ background: '#13161B', color: '#FFF', paddingTop: '10px' }}>
                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} style={{ background: '#13161B' }} eventKey="0" className="p-2 text-center accordian-main">
                                        PROJECT DETAILS
                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body style={{ background: '#13161B' }}>
                                            <strong>Description:</strong> The objective of this project is to develop a machine learning model which can learn the explainable features for a task domain and learn to answer the variety of queries in that domain
                                <ColoredLine color="#fff" />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Human determined features: The hand written samples are verified by human examiners</li>
                                                <li>Deep learning features :  Representation of multi-layer artificial neural network which can automatically learn the feature representations from the data provided</li>
                                            </ul>
                                            <ColoredLine color="#fff" />
                                            <strong>Models:</strong>
                                            <ul>
                                                <li>Probability Graphical Models (PGM's): To infer the features, to determine weather the images are similar or not</li>
                                                <li>Siamese network: A twin network that share same weights among them to learn useful features.</li>
                                                <li>Auto Encoders: Learns the compressed Learning features of the given inputs.</li>
                                                <li>Convolution Neural Network (CNN): TO classify weather the two images are similar or not</li>
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
                                                        <Image src={L_Keras} alt="Keras" rounded className="image-style1 m-1"></Image> Keras
                                            </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_Numpy} alt="NumPy" rounded className="image-style1 m-1"></Image> NumPy
                                            </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_colab} alt="Jupyter notebook" rounded className="image-style1 m-1"></Image> Google Colab
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
                            <Button className="" variant="dark" href="https://github.com/manish216/CSE-674-Project2" >
                                SOURCE CODE
                        </Button>
                        </div>
                    </div>
                </VerticalTimelineElement>
                {/* Project 3 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'transparent', color: '#fff', border: '1px #bfbfbf solid' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="Fall 2019"
                    iconStyle={{ background: '#13161B', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Covid Tracker Website</h4>
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div style={{ background: '#13161B', color: '#FFF', paddingTop: '10px' }}>
                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} style={{ background: '#13161B' }} eventKey="0" className="p-2 text-center accordian-main">
                                        PROJECT DETAILS
                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body style={{ background: '#13161B' }}>
                                            <strong>Description:</strong> The objective of the project is to design a user friendly website to track COVID statistics across world
                                            <ColoredLine color="#fff" />
                                            {/* <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li></li>
                                                <li>GSC features: Features extracted using Gradient Structural Concavity (GSC) algorithm.</li>
                                            </ul> */}
                                            {/* <ColoredLine color="#fff" /> */}
                                            <strong>Features:</strong>
                                            <ul>
                                                <li>Visualize Covid Trend</li>
                                                <li>Weekly Average</li>
                                            </ul>
                                            <ColoredLine color="#fff" />
                                            <strong>Tech used:</strong>
                                            <ul>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_Flask} alt="Flask" rounded className="image-style1 m-1"></Image> Flask
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_HTML5} alt="Matplotlib" rounded className="image-style1 m-1"></Image> HTML5
                                                    </span>
                                                </li>
                                                {/* <li>
                                                    <span className="p-2">
                                                        <Image src={L_sqlLite} alt="SQLite" rounded className="image-style1 m-1"></Image> SQLite
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_gMap} alt="Google Map API" rounded className="image-style1 m-1"></Image> Google Map API
                                                    </span>
                                                </li> */}
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center sourceCode">
                            {/* <Button variant="dark">SEE LIVE</Button> */}
                            <Button className="" variant="dark" href="https://github.com/manish216/Covid_Tracker" >
                                SOURCE CODE
                        </Button>
                        </div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default TimeLine3;