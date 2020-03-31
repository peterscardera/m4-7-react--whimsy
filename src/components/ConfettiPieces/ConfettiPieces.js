import React from "react";
import styled from "styled-components";
import Particle from "../Particle/Particle";
const ConfettiPieces = ({angle, distance, color}) => {
  return (
    <>
      <CenteredWithinParent>
        <Particle angle={angle} distance={distance}>
          <StyledDiv style={{backgroundColor:color}} />
        </Particle>
      </CenteredWithinParent>
    </>
  );
};
export default ConfettiPieces;

const StyledDiv = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 10px;
  height: 10px;
`;

const CenteredWithinParent = styled.div`
  position: absolute;
`;
