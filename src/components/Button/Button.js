import React from 'react';
import styled from 'styled-components';

function Button({ name, icon, onClick, disabled, bg, bPad, color, bRad }) {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-size: inherit;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: rgba(7, 65, 115, 0.8);
  }
`;

export default Button;
