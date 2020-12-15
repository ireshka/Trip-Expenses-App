import React from 'react';

import { StyledButton } from './Button.styles';

const Button = ({ textColor, btnColor, btnBorder, textOnButton }) => {
  // Customize the button adding props: textOnButton, textColor, btnColor, btnBorder.
  // For example: textOnButton="Add" textColor="white" btnColor="green" btnBorder="none"

  // only for submit button

  const btnStyle = {
    color: textColor,
    backgroundColor: btnColor,
    border: btnBorder,
  };

  return (
    <StyledButton type="submit" style={btnStyle}>
      {textOnButton}
    </StyledButton>
  );
};

export default Button;
