import React, {Component} from 'react';
import styles from './education.module.css';
import HeroSectionEducation from '../../components/HeroSection/HeroSectionEducation.component';


class Education extends Component {
    render() {
        return(
            <div className ={styles.body}>

                <HeroSectionEducation />
            </div>
        );
    }
}

export default Education;