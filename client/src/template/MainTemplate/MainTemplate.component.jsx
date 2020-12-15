import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faDollarSign, faWallet } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import Footer from '../../components/Footer/Footer.component';
import Header from '../../components/Header/Header.component';
import { StyledWrapper } from './MainTemplate.styles';

library.add(faWallet, faDollarSign, faArrowLeft);

export const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <Header />
      {children}
      <Footer />
    </StyledWrapper>
  );
};
