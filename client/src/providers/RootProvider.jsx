import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../styles/defaultTheme';
import { GlobalStyle } from '../styles/GlobalStyle';
import { MainTemplate } from '../template/MainTemplate/MainTemplate.component';

const RootProvider = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400,600|Rubik:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <MainTemplate>{children}</MainTemplate>
      </ThemeProvider>
    </>
  );
};

export default RootProvider;

RootProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};
