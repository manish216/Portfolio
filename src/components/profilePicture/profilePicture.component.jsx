import React, { Component } from "react";
import { useSpring, animated } from 'react-spring';
import styles from './profilePicture.module.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)` //bird
const trans2 = (x, y) => `translate3d(${x / 8 + 70}px,${y / 8 - 50}px,0)` // sun
const trans3 = (x, y) => `translate3d(${x / 6 - 60}px,${y / 6 + 10}px,0)` // cloud
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)` //background


const ProfilePicture = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div className={styles.card1} style={{ transform: props.xy.interpolate(trans1) }} />
            <animated.div className={styles.card2} style={{ transform: props.xy.interpolate(trans2) }} />
            <animated.div className={styles.card3} style={{ transform: props.xy.interpolate(trans3) }} />
            <animated.div className={styles.card4} style={{ transform: props.xy.interpolate(trans4) }} />
        </div>
    );
};


export default ProfilePicture;