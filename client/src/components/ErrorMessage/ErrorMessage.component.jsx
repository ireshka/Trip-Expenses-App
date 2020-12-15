import React from 'react';

import { StyledErrorBox, StyledErrorList } from './ErrorMessage.styles';

const ErrorMessage = ({ error }) => {
  if (error && (error.length === 1) | (typeof error === 'string')) {
    const [oneError] = error;
    return <StyledErrorBox>{oneError}</StyledErrorBox>;
  } else if (error && error.length > 1) {
    const errorElements = error.map((error) => <li>{error}</li>);
    return (
      <StyledErrorBox>
        <StyledErrorList>{errorElements}</StyledErrorList>
      </StyledErrorBox>
    );
  }
  return <></>;
};

export default ErrorMessage;
