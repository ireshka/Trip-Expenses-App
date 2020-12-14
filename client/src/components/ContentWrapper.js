import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';
import { H2 } from './styled';

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 5px ${theme.colors.neutralMidDark};
  display: flex;
  flex-direction: column;
  margin: 40px auto 40px;
  max-width: 600px;
  padding-bottom: 20px;
  width: 100%;
  ${theme.media.landscapePhone} {
    border-radius: ${theme.radius.bg};
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

const TitleWrapper = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 4px ${theme.colors.neutralExtraLight};
  display: flex;
  height: 70px;
  justify-content: center;
  margin-bottom: 30px;
  ${theme.media.landscapePhone} {
    border-radius: ${theme.radius.bg} ${theme.radius.bg} 0 0;
  }
`;

const ContentWrapper = (props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <H2>{props.title}</H2>
      </TitleWrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

export default ContentWrapper;
