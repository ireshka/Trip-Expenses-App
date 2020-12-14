import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const ErrorBox = styled.div`
  background-color: ${theme.colors.errorMsgBg};
  border: 1px solid ${theme.colors.errorMsgBorder};
  border-radius: ${theme.radius.sm};
  color: ${theme.colors.errorMsgText};
  font-size: 14px;
  margin: 0 0 20px 0;
  padding: 8px;
`;

const ErrorList = styled.ul`
  list-style-position: inside;
`;

const ErrorMessage = ({ error }) => {
  if (error && (error.length === 1) | (typeof error === 'string')) {
    const [oneError] = error;
    return <ErrorBox>{oneError}</ErrorBox>;
  } else if (error && error.length > 1) {
    const errorElements = error.map((error) => <li>{error}</li>);
    return (
      <ErrorBox>
        <ErrorList>{errorElements}</ErrorList>
      </ErrorBox>
    );
  }
  return <></>;
};

export default ErrorMessage;
