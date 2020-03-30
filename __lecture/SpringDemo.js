import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const SpringDemo = () => {
  const [tension, setTension] = React.useState(80);
  const [friction, setFriction] = React.useState(10);
  const [lock, setLock] = React.useState(false);

  const [on, setOn] = React.useState(false);
  const [onCompare, setOnCompare] = React.useState(false);

  const spring = useSpring({
    transform: `translateX(${on ? 420 : 0}px)`,
    config: { tension, friction, precision: 0.005 },
  });

  return (
    <>
      <div style={{ display: 'flex', width: 800 }}>
        <label style={{ flex: 1, marginRight: 50 }}>
          Tension:
          <br />
          <input
            type="range"
            min={10}
            max={250}
            value={tension}
            onChange={ev => setTension(ev.currentTarget.value)}
          />
        </label>
        <label style={{ flex: 1 }}>
          Friction:
          <br />
          <input
            type="range"
            min={5}
            max={100}
            value={friction}
            onChange={ev => setFriction(ev.currentTarget.value)}
          />
        </label>
        <label style={{ flex: 1 }}>
          Lock:
          <br />
          <input
            type="checkbox"
            checked={lock}
            onChange={ev => setLock(!lock)}
          />
        </label>
      </div>
      <br />
      <br />
      <Demo>
        <Ball style={spring} onClick={() => setOn(!on)} />
        <Ball
          style={{
            transform: `translateX(${(lock ? on : onCompare) ? 420 : 0}px)`,
            transition: 'transform 500ms ease',
            background: 'aqua',
          }}
          onClick={() => (lock ? setOn(!on) : setOnCompare(!onCompare))}
        />
      </Demo>
    </>
  );
};

const Demo = styled.div`
  width: 500px;
  border: 1px solid hsla(0deg, 0%, 50%, 0.2);
`;

const Ball = styled(animated.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: red;
`;

export default SpringDemo;
