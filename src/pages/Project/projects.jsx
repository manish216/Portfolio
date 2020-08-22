import React, { Component } from 'react';
import TimeLine from '../../components/projects-timeline/projects-timeline.component';
import styles from './projects.module.css';
import HorizantalTimeline from '../../components/HorizantalTimeline/HorizantalTimeline.component';


class Projects extends Component {
    render() {
        return (
            <div className={styles.body}>
                <div>
                    <HorizantalTimeline />
                </div>
            </div>
        );
    }
}

export default Projects;