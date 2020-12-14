import React, { Component } from 'react';
import styled from 'styled-components';

import HomePageImage from '../../images/map-with-pins.png';
import PinImage from '../../images/pin.png';
import { theme } from '../../utils/theme';

const ContentWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 0;
  box-shadow: 0 0 5px ${theme.colors.neutralMidDark};
  display: flex;
  flex-direction: column;
  margin: 40px auto 40px;
  max-width: 900px;
  min-width: 300px;
  padding-bottom: 20px;
  width: 100%;
  ${theme.media.landscapePhone} {
    border-radius: ${theme.radius.bg};
    width: 90%;
  }
`;

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 30px auto 40px;
  width: 90%;
  ${theme.media.landscapePhone} {
    flex-direction: row;
    margin: 30px auto 20px;
  }
`;

const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  ${theme.media.landscapePhone} {
    width: 30%;
  }
`;

const ImgHomePage = styled.img`
  max-width: 150px;
`;

const HeaderTextWrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  ${theme.media.landscapePhone} {
    width: 70%;
  }
`;

const HeaderText = styled.h2`
  font-size: 26px;
  text-shadow: 0 0 2px 2px ${theme.colors.white};
  ${theme.media.tablet} {
    font-size: 32px;
  }
`;

const List = styled.ul`
  list-style-image: url(${PinImage});
`;

const ListItem = styled.li`
  color: ${theme.colors.neutralMidDark};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 18px;
  text-shadow: 0 0 2px ${theme.colors.white};
  ${theme.media.tablet} {
    font-size: 22px;
  }
`;

const BodyWrapper = styled.div`
  margin: 0 auto 20px;
  width: 70%;
`;

class HomePage extends Component {
  render() {
    return (
      <ContentWrapper>
        <HeaderWrapper>
          <ImageWrapper>
            <ImgHomePage src={HomePageImage} alt="Map image" />
          </ImageWrapper>
          <HeaderTextWrapper>
            <HeaderText>We help you to manage your travel costs!</HeaderText>
          </HeaderTextWrapper>
        </HeaderWrapper>
        <BodyWrapper>
          <List>
            <ListItem>Record all your travel expenses</ListItem>
            <ListItem>
              Expenses in various currencies are automatically converted to one chosen currency
            </ListItem>
            <ListItem>Control your expenses in different categories</ListItem>
            <ListItem>Check if you remain within your budget</ListItem>
          </List>
        </BodyWrapper>
      </ContentWrapper>
    );
  }
}
export default HomePage;
