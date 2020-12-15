import React from 'react';

import { H2 } from '../styled';
import { StyledContainer, StyledTitleWrapper, StyledWrapper } from './ContentWrapper.styles';

const ContentWrapper = (props) => {
  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <H2>{props.title}</H2>
      </StyledTitleWrapper>
      <StyledContainer>{props.children}</StyledContainer>
    </StyledWrapper>
  );
};

export default ContentWrapper;
