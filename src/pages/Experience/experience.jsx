import React, { Component } from 'react';
import styles from  './experience.module.css';

import Fade from 'react-reveal/Fade';
import ExperienceTimeLine from '../../components/projects-timeline/experienceTimeline.components';



// projects
import L_GetGitHubInfo from "../../assests/img/projects/get_github_info.webp";
import L_SmartBrain from "../../assests/img/projects/brain.webp";
import L_RoboFriends from "../../assests/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assests/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assests/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import { Button } from 'react-bootstrap';
import L_REACT from "../../assests/img/skills/react.svg";
import L_R from "../../assests/img/skills/R_logo.webp";
import L_PYTHON from "../../assests/img/skills/python.svg";
import L_sqlLite from "../../assests/img/skills/SQLite.png";
import L_gMap from "../../assests/img/skills/googleMaps.png";
import L_hadoop from "../../assests/img/skills/hadoop.png";
import L_Java from "../../assests/img/skills/java.svg";
import L_Tomcat from "../../assests/img/skills/Tomcat.jpg";
import L_s3 from "../../assests/img/skills/aws-s3.png";
import L_ec2 from "../../assests/img/skills/ec2instance.png";
import L_Lambda from "../../assests/img/skills/Aws_Lambda.png";
import L_RDS from "../../assests/img/skills/AWS_RDS.png"
import L_Route from "../../assests/img/skills/AWS_Route53.png";
import L_loadBal from "../../assests/img/skills/loadBalancer.png";
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


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);





// import styles from './experience.module.css';

class Experience extends Component {
    render() {
        return (
            window.scrollTo(0, 0);
            <div className={styles.body}>

                <div className={styles.test}>
                    Shaping the future <br/>
                    with the people <br/>
                    who create&nbsp;it. <br/>
                </div>
                <div className={styles.body}>
                <div className={styles.experienceTimeline}>
                    {/* <p className={styles.experiencePara}>
                    <h5 className={styles.company}>Peloria</h5>
                        Software and Machine Learning Engineer<br />
                        Role: Developer <br />
                        Technologies: <br />
                        Duration:     <br />
                    </p> */}
                    <h4 className={styles.company}> Peloria </h4>
                    <p className={styles.company}>Software and Machine Learning Engineer</p>
                    <p className={styles.description}>
                        Role: Developer <br />
                        Duration:     <br />
                    </p>
                    <Accordion >
                        <Card>
                            <Accordion.Toggle as={Card.Header} style={{ background: '#13161B' }} eventKey="0" className="p-2 text-center accordian-main">
                                PROJECT DETAILS
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body style={{ background: '#13161B' }}>
                                        <strong>Description:</strong>  Peloria Employs artificial intelligence and social science methodologies to monitor online language using a wide-range of other data sources. It does this to develop Early Warning/Early Action prediction of change in poverty, violence,supply-chain disruption, human displacement,ecological change and other societal phenomena
                                <ColoredLine color="#fff" />
                                    {/* <strong>Data Sources:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Twitter</li>
                                                <li>CDC</li>
                                            </ul>
                                            <ColoredLine color="#fff" /> */}
                                    <strong>Features:</strong>
                                    <ul>
                                            <li>The final product is a user interface with a multi-faceted data console, which can be used to track the social unrest and identify the key causal indicators behind the unrest</li>
                                            <li>Developed Sentiment ranking algorithm to create a common dataset for the web development team to visualize the twitter sentiment analysis to the end-users</li>
                                            <li>Developed web APIs to extract data from different sources and ingest them into Amazon RDS</li>
                                            <li>Designed functionalities for application development that includes front-end, back-end based on business requirements</li>
                                            <li>Implementation discretization and binding,data wrangling: cleaning,transformation,merging and reshaping data frames</li>
                                            <li>Integrated applications with designing database architecture and server scripting</li>
                                            <li>Developed a python script in AWS lambda to process the files (twitter tweets and other business related data) coming to the S3
                                            service and inserted the processed files into RDS</li>
                                            <li>Developed a python based API (RESTful Web service) to communicate between different services in the Application</li>
                                            <li>Developed a custom Geographical Map interface using GeoJSON file to plot the social unrest level in specific region</li>
                                            <li>Deployed a web application in Amazon EC2 and maintained the traffic to the application by using the ALB(Load Balan</li>
                                            <li>Assisted the team to publish the web application to clients using Route 53</li>
                                            <li>Developed and Designed graphs using HTML, CSS and Java Script</li>
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
                                        <li>
                                            <span className="p-2">
                                                <Image src={L_Flask} alt="Flask" rounded className="image-style1 m-1"></Image> Flask
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                                <Image src={L_s3} alt="Amazon S3" rounded className="image-style1 m-1"></Image> Amazon S3
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                                <Image src={L_ec2} alt="ec2" rounded className="image-style1 m-1"></Image> AWS ec2
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                                <Image src={L_RDS} alt="RDS" rounded className="image-style1 m-1"></Image> AWS RDS
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                                <Image src={L_loadBal} alt="Load balancer" rounded className="image-style1 m-1"></Image> AWS Load Balancer
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                                <Image src={L_Route} alt="Route 53" rounded className="image-style1 m-1"></Image> AWS Route 53
                                            </span>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div >
                </div>
            </div>
        );
    }
}

export default Experience;