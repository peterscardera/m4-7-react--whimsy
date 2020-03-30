import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeDemo = () => {
  return <Wrapper>Boop</Wrapper>;
};

const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  background: linear-gradient(120deg, #ffe600, #ff2588);
  border-radius: 15% 5%;
  display: grid;
  place-items: center;
  animation: ${fadeIn} 750ms 300ms both;
`;

export default FadeDemo;
