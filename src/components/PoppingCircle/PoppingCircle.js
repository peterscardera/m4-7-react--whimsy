import React, { useReducer } from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return (
    <Wrapper style={{ width: size, background: color,  height: size }}> </Wrapper>
  );
};

export default PoppingCircle;

const itsPoppin = keyframes`
from {
opacity: 1;
transform: scale(0)
}
to {
opacity: 0;
transform: scale(3)


}
`

const Wrapper = styled.div`
display:block;
border-radius: 50%;
@media (prefers-reduced-motion:no-preference) {
  animation: ${itsPoppin} 500ms forwards;
}

position: absolute;
`