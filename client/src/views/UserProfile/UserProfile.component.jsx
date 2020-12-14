import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ContentWrapper from '../../components/ContentWrapper';
import { H3, InnerContainer, LinkButtonSmall } from '../../components/styled';
import getToken from '../../utils/getToken';
import { theme } from '../../utils/theme';

const SectionTitle = styled(H3)`
  &::after {
    background-color: ${theme.colors.neutralMidLight};
    content: '';
    display: block;
    height: 2px;
    margin: 15px 0 30px;
    width: 70%;
  }
`;

const Button = styled(LinkButtonSmall)`
  margin: 0 auto 20px 0;
  width: 200px;
`;

const ParagraphAlignedLeft = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 8px 0;
  text-align: left;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const DataGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  ${theme.media.landscapePhone} {
    flex-direction: row;
  }
`;

const LabelData = styled(ParagraphAlignedLeft)`
  margin-right: 20px;
  width: 90px;
`;
const DisabledText = styled(ParagraphAlignedLeft)`
  color: ${theme.colors.neutralMidDark};
`;

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  handleNotChosenTrip() {
    alert('You have to choose trip first');
    return '';
  }

  componentDidMount() {
    axios
      .get(`/api/users/${this.props.userId}`, { headers: { 'x-auth-token': `${getToken()}` } })
      .then((res) => {
        this.setState({
          username: res.data.username,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <ContentWrapper title="Settings">
        <InnerContainer>
          <Section>
            <SectionTitle>Your Profile Information</SectionTitle>
            <DataGroup>
              <LabelData>User Name:</LabelData>
              <DisabledText>{this.state.username}</DisabledText>
            </DataGroup>
          </Section>
          <Section>
            <SectionTitle>Category settings:</SectionTitle>
            <Button to={`#`} color="disabled">
              Manage Categories
            </Button>
          </Section>
          <Section>
            <SectionTitle>Currency settings:</SectionTitle>
            <Button to={`#`} color="disabled">
              Manage Currency
            </Button>
          </Section>
        </InnerContainer>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
  };
};

export default connect(mapStateToProps)(UserProfile);
