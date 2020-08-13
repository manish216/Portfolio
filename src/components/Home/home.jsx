import React, { Component } from 'react';

import styles from  './home.module.css';
import { init } from 'ityped';




class Home extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#myElement')
        init(myElement, {   strings: ['Software Developer!','Data Engineer!','Data Scientist!','Machine Learning Engineer!'],
                            typeSpeed:100,
                            backSpeed:50,
                            startDelay:500,
                            backDelay:500,
                            loop: true,
                            showCursor:true,
                            cursorChar: "|",
                        }
            )
    }
    render() {
        return (
            <div className ={styles.pageWrapper}>
                <div id="myElement"></div>

                {/* <div className={styles.pageBackground}>
                </div> */}
            </div>
        );
    }
}

export default Home;