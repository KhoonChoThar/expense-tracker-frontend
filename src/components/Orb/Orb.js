import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

const Orb = () => {
  const { width, height } = useWindowSize();
  const moveOrb = keyframes`
      0%{transform:translate(0,0)}
      50%{
          transform:translate(${width}px,${height / 2}px)
      }
      100%{transform:translate(0,0)}
    `;
  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #c0d6e8 0%, #7aa2e3 100%);
    filter: blur(200px);
    animation: ${moveOrb} 15s alternate linear infinite;
  `;

  return <OrbStyled></OrbStyled>;
};

export default Orb;
