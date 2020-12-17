import React, {Component} from 'react';
import styles from './education.module.css';
import HeroSectionEducation from '../../components/HeroSection/HeroSectionEducation.component';
import ScrollToTop from '../../components/scrollTop/scrollTop.component';

class Education extends Component {
    render() {
        return(
            <div className ={styles.body}>
                window.scrollTo(0, 0);
                <ScrollToTop />
                <HeroSectionEducation />
            </div>
        );
    }
}

export default Education;