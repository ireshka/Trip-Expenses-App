import React from 'react';
import styled from 'styled-components';
import { theme } from '../utils/theme';

const ErrorDiv = styled.div`
  padding: 8px;
  margin: 0 0 20px 0;
  font-size: 14px;
  color: ${theme.colors.errorMsgText};
  background-color: ${theme.colors.errorMsgBg};
  border: 1px solid ${theme.colors.errorMsgBorder};
  border-radius: ${theme.radius.sm};
`;

const ErrorMessage = ({ error }) => {
  if (error && (error.length === 1) | (typeof error === 'string')) {
    const [oneError] = error;
    return <ErrorDiv>{oneError}</ErrorDiv>;
  } else if (error && error.length > 1) {
    const errorElements = error.map((error) => <li>{error}</li>);
    return (
      <ErrorDiv>
        <ul>{errorElements}</ul>
      </ErrorDiv>
    );
  }
  return <></>;
};

export default ErrorMessage;
