import React, {Component} from 'react';
import styles from './education.module.css';
import HeroSectionEducation from '../../components/HeroSection/HeroSectionEducation.component';


class Education extends Component {
    render() {
        return(
            <div className ={styles.body}>
                <h1>Education</h1>
                <HeroSectionEducation />
            </div>
        );
    }
}

export default Education;