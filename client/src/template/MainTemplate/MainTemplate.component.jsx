import React from 'react';

import Footer from '../../components/Footer/Footer.component';
import Header from '../../components/Header/Header.component';
import { StyledWrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <Header />
      {children}
      <Footer />
    </StyledWrapper>
  );
};
