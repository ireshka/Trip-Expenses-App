import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const DefaultButton = styled.button`
  background-color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 4px ${theme.colors.neutralLight};
  color: ${theme.colors.neutralMidDark};
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  margin: 0 auto 20px;
  min-height: 40px;
  outline: none;
  text-align: center;
  transition: 0.3s;
  user-select: none;
  width: 100%;

  &:hover {
    box-shadow: 0 0 4px ${theme.colors.neutralMidLight};
    font-weight: 600;
  }
  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  // Customize the button adding props textOnButton, textColor, btnColor, btnBorder.
  // For example: textOnButton="Add" textColor="white" btnColor="green" btnBorder="none"

  const btnStyle = {
    color: props.textColor,
    backgroundColor: props.btnColor,
    border: props.btnBorder,
  };

  return (
    <DefaultButton type="submit" style={btnStyle}>
      {props.textOnButton}
    </DefaultButton>
  );
};

export default Button;
