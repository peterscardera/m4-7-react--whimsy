import React from "react";
import { useSpring, animated } from "react-spring";

const Particle = ({ angle, distance, children }) => {
  const convertDegreesToRadians = angle => (angle * Math.PI) / 180;
  const angleInRads = convertDegreesToRadians(angle);

  const StartingPositionX = Math.cos(angleInRads) * distance;
  const StartingPositionY = Math.sin(angleInRads) * distance;

  const EndingX = Math.cos(angleInRads) * distance;
  const EndingY = Math.sin(angleInRads) * distance;

  const positionSpring = useSpring({
    transform: `translate(${EndingX}px, ${EndingY}px) scale(0)`,
    from: {
      transform: `translate(${StartingPositionX}px, ${StartingPositionY}px) scale(1)`
    },

    config: {
        friction: 81,
        precision: 0.374,
        velocity: 20
      }
      
  });

  return (
    <animated.div
      style={{
      ...positionSpring
      }}
    >
      {children}
    </animated.div>
  );
};

export default Particle;
