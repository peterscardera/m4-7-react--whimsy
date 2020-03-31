import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const scaleIn = ({ children }) => {
  const query = "(prefers-reduced-motion: reduce)";

  const mediaQueryList = window.matchMedia(query);

  const shouldReduceMotion = mediaQueryList.matches;
  const style = useSpring({
    transform: "scale(1)",
    from: {
      transform: "scale(0)"
    },
    config: {
      mass: 10.6,
      tension: 353,
      friction: 25,
      precision: 0.133,
      velocity: 5
    },
    immediate: shouldReduceMotion
  });

  return <animated.div style={style}> {children} </animated.div>;
};

export default scaleIn;
