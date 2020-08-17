import React, { Component } from 'react';
import './experience.css';
// for Hero Section
import { motion } from 'framer-motion';
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};


class Experience extends Component {
    componentDidMount() {

        document.fonts.load('80px Founders Grotesk').then(() => {
            // window.addEventListener('resize', initCanvas);
            // const {mainCanvas, mainCanvasCtx, textCanvas, video } = initCanvas();
            // draw(mainCanvas, mainCanvasCtx, video, textCanvas);
        })

    }


    render() {
        return (
            <div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ ease: 'easeIn', duration: 0.5, delay: .18 }}

                >
                    <h1 id="center" >
                        Shaping the future with the people who create&nbsp;it.
                    </h1>
                </motion.div>

            </div>
        );
    }
}

export default Experience;