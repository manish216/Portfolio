import React, { useRef, useState, useEffect, useCallback } from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

import { useTrail, animated, useTransition} from 'react-spring';
import styles from "./titleMessage.module.css";

import Delayed from "../Delayed/delayed";

// for text
const items = ['HI, I am ', 'Manish Reddy Challamala']
const config = { mass: 5, tension: 2000, friction: 200 }

// for text


const MyTitleMessage = styled.h1`

  position: absolute;
  width: 100%;
  top: 28rem;
  z-index: 1;
  margin-top: -80px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;

    letter-spacing: 4px;

    .main {
      font-size: 25px;
      color: #fff;

    }

    .sub {
      font-size: 20px;
      color: #fff;
      letter-spacing: 2px;
    }
  }
`;





const TitleMessage = () => {
  // const [toggle, set] = useState(true)
  // const trail = useTrail(items.length, {
  //   config,
  //   opacity: toggle ? 1 : 0,
  //   x: toggle ? 0 : 20,
  //   height: toggle ? 80 : 0,
  //   from: { opacity: 0, x: 20, height: 0 },
  // })

// second example
  const ref = useRef([])
  const [items, set] = useState([])

  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#FFF' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 50 },
      { transform: 'perspective(600px) rotateX(0deg)', color: '#FFF'  },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#fff' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#fff' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Hi, I am ', 'Manish Reddy Challamala']), 500))

  }, [])

  useEffect(() => void reset(), [])

//

      return(
      <MyTitleMessage>
        <div className="titleMessage">
            <div>
              {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                <animated.div className="transitions-item" key={key} style={rest} >
                  <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                </animated.div>
              ))}
            </div>
            <div className="heading">
                {/* for text */}
                    {/* <div className={styles.trails_main} onClick={() => set(state => !state)}>
                      <div>
                        {trail.map(({ x, height, ...rest }, index) => (
                          <animated.div
                            key={items[index]}
                            className={styles.trails_text}
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div style={{ height }}>{items[index]}</animated.div>
                          </animated.div>
                        ))}
                      </div>
                    </div> */}

                {/* for text */}
                {/* <div className="main text-center mb-3">
                    Hi, I am
          <br />
                    <span>
                        <strong>Manish Reddy Challamala</strong>
                    </span>
                </div> */}
                <div className="sub">
                  <Delayed waitBeforeShow={600}>
                    <Typewriter
                        options={{
                            strings: ["ML Engineer","Data Scientist", "Data Engineer", "Software Developer"],
                            autoStart: true,
                            loop: true,
                            delay: 50
                        }}
                    />
                    </ Delayed>
                </div>

            </div>
        </div>
    </MyTitleMessage>);
};

export default TitleMessage;
