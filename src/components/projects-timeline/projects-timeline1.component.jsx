
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

const TimeLine1 = () => {
    return (
        <div id="projects">
            <VerticalTimeline>
                {/* Project 1 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'transparent', color: '#fff', border: '1px #bfbfbf solid' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="Spring 2019"
                    iconStyle={{ background: '#13161B', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Validating disease/flu tweets with CDC</h4>
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div style={{ background: '#13161B', color: '#FFF', paddingTop: '10px' }}>
                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} style={{ background: '#13161B' }} eventKey="0" className="p-2 text-center accordian-main">
                                        PROJECT DETAILS
                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body style={{ background: '#13161B' }}>
                                            <strong>Description:</strong> Objective of this project is to validate the social response from twitter with CDC (Center for disease control and prevention) data regarding any flu/disease outbreaks
                                <ColoredLine color="#fff" />
                                            <strong>Data Sources:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Twitter</li>
                                                <li>CDC</li>
                                            </ul>
                                            <ColoredLine color="#fff" />
                                            <strong>Features:</strong>
                                            <ul>
                                                <li>Ran statistical analysis to determine the counties with their respective concentration of illness activity ranging from high to minimal </li>
                                                <li>visualized the results using shiny</li>
                                                <li>A/B testing to test the significance of our results with the data from CDC</li>
                                            </ul>
                                            <ColoredLine color="#fff" />
                                            <strong>Tech used:</strong>
                                            <ul>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_R} alt="R" rounded className="image-style1 m-1"></Image> R
                                            </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_ggplot} alt="ggplot" rounded className="image-style1 m-1"></Image> ggplot
                                            </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_shiny} alt="shiny" rounded className="image-style1 m-1"></Image> Shiny
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
                            <Button className="" variant="dark" href="https://github.com/manish216/DIC_LAB1" >
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
                    date="Spring 2019"
                    iconStyle={{ background: '#13161B', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title"> Determining the trending sports in the US over an year </h4>
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div style={{ background: '#13161B', color: '#FFF', paddingTop: '10px' }}>
                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} style={{ background: '#13161B' }} eventKey="0" className="p-2 text-center accordian-main">
                                        PROJECT DETAILS
                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body style={{ background: '#13161B' }}>
                                            <strong>Description:</strong> The goal of this project to determine the trendy sports over given period of time
                                <ColoredLine color="#fff" />
                                            <strong>Data Sources:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Twitter</li>
                                                <li>Common Crawl</li>
                                                <li>NYTimes</li>
                                            </ul>
                                            <ColoredLine color="#fff" />
                                            <strong>Features:</strong>
                                            <ul>
                                                <li>Extracted data from the above mentioned data sources and stored it in amoazon S3</li>
                                                <li>Pre-processed the stop words and word sense disambiguation was cleared using NLTKlibrary</li>
                                                <li>Implemented Hadoop,Map-Reduce facility with master and worker nodes for the processing and analysis of the collected unstructured data</li>
                                                <li>word clouds are developed with help of word cloud, word co-occurrence algorithms and visualized using tableau</li>
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
                                                        <Image src={L_s3} alt="s3" rounded className="image-style1 m-1"></Image> S3
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_hadoop} alt="Hadoop" rounded className="image-style1 m-1"></Image> Hadoop
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

                            {/* <Button variant="dark">SEE LIVE</Button> */}
                            {/* <Button className="" variant="dark" href="" >
                                SOURCE CODE
                        </Button> */}
                        </div>
                    </div>
                </VerticalTimelineElement>
                {/* Project 3 */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'transparent', color: '#fff', border: '1px #bfbfbf solid' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date="Spring 2019"
                    iconStyle={{ background: '#13161B', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Way Weather-Travel safe website</h4>
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div style={{ background: '#13161B', color: '#FFF', paddingTop: '10px' }}>
                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} style={{ background: '#13161B' }} eventKey="0" className="p-2 text-center accordian-main">
                                        PROJECT DETAILS
                        </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body style={{ background: '#13161B' }}>
                                            <strong>Description:</strong> Designed a user friendly web application to track the weather across multiple points on a customer journey’s roadway route
                                            <ColoredLine color="#fff" />
                                            {/* <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li></li>
                                                <li>GSC features: Features extracted using Gradient Structural Concavity (GSC) algorithm.</li>
                                            </ul> */}
                                            {/* <ColoredLine color="#fff" /> */}
                                            <strong>Algorithms:</strong>
                                            <ul>
                                                <li>The API’s of google map and open weather were called by tomcat server and responses were plotted on google maps</li>
                                                <li>Two types of model’s were developed to test their retrieval times</li>
                                                <li>Model-1: without cache memory</li>
                                                <li>Model-2: with Cache Memory</li>
                                            </ul>
                                            <ColoredLine color="#fff" />
                                            <strong>Tech used:</strong>
                                            <ul>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_Java} alt="Java" rounded className="image-style1 m-1"></Image> Java
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_Tomcat} alt="Tomcat" rounded className="image-style1 m-1"></Image> Apache Tomcat
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_HTML5} alt="Matplotlib" rounded className="image-style1 m-1"></Image> HTML5
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_sqlLite} alt="SQLite" rounded className="image-style1 m-1"></Image> SQLite
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="p-2">
                                                        <Image src={L_gMap} alt="Google Map API" rounded className="image-style1 m-1"></Image> Google Map API
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
                            {/* <Button className="" variant="dark" href="https://github.com/manish216/CSE-573-Project3" >
                                SOURCE CODE
                        </Button> */}
                        </div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default TimeLine1;