import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoImg from '../images/logo.png';
import { clearState, setLoggedOut } from '../redux/actions/userActions';
import { theme } from '../utils/theme';

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.whiteOverlay};
  box-shadow: 0px 4px 4px ${theme.colors.bgOverlay};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  ${theme.media.tablet} {
    flex-direction: row;
  }
`;

const TopLabel = styled.div`
  align-items: center;
  box-shadow: 0px 0px 4px ${theme.colors.bgOverlay};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 25px;
  width: 100%;
  ${theme.media.tablet} {
    box-shadow: none;
  }
`;

const LogoLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 35px;
  margin-right: 20px;
`;

const H1 = styled.h1`
  color: ${theme.colors.neutralDark};
  font-family: ${theme.fonts.special};
  font-size: 24px;
  font-weight: normal;
  margin: 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${theme.colors.neutralMidLight};
  cursor: pointer;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${theme.colors.btnMain};
  }
`;

const ToggleNavOpen = styled(Button)`
  color: ${theme.colors.neutralDark};
  ${theme.media.tablet} {
    display: none;
  }
`;

const Nav = styled.nav`
  width: 100%;
`;

const Ul = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 15px 25px;
  width: 100%;
`;

const NavForNotLoggedIn = styled(Ul)`
  display: ${(props) => (props.showMenu ? 'flex' : 'none')};
  justify-content: flex-end;
`;

const NavForLoggedIn = styled(Ul)`
  display: ${(props) => (props.showMenu ? 'flex' : 'none')};
  justify-content: space-between;
  ${theme.media.tablet} {
    justify-content: flex-end;
  }
`;

const Li = styled.li`
  list-style: none;
  padding: 0 25px;
`;

const StyledLink = styled(Link)`
  color: ${(props) =>
    props.active === 'true' ? theme.colors.neutralDark : theme.colors.neutralMidLight};
  color: ${theme.colors.neutralDark};
  font-size: 16px;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.btnMain};
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: true,
      activeTab: '',
    };
  }

  toggleMenu = () => {
    this.setState((prevState, props) => ({
      menuOpened: !prevState.menuOpened,
    }));
  };

  logOut = () => {
    this.props.setLoggedOut();
    this.props.clearState();
    localStorage.removeItem('travelplanner_x-auth-token');
  };

  setChoosen = (e) => {
    this.setState({
      activeTab: e.target.id,
    });
  };

  render() {
    return (
      <HeaderWrapper>
        <TopLabel>
          <LogoLink to={'/'} title="HomePage">
            <Logo src={LogoImg} alt="Trip Expenses App"></Logo>
            <H1>Trip Expenses</H1>
          </LogoLink>
          <ToggleNavOpen onClick={this.toggleMenu}>
            <FontAwesomeIcon size="lg" icon={this.state.menuOpened ? faTimes : faBars} />
          </ToggleNavOpen>
        </TopLabel>

        <Nav>
          <NavForNotLoggedIn showMenu={this.state.menuOpened && !this.props.isLoggedIn}>
            <Li>
              <StyledLink
                to={'/users/login'}
                title="Login"
                onClick={(e) => this.setChoosen(e)}
                active={`${this.state.activeTab === 'login'}`}
                id="login"
              >
                Login
              </StyledLink>
            </Li>
            <Li>
              <StyledLink
                to={'/users/register'}
                title="Sign Up"
                onClick={(e) => this.setChoosen(e)}
                active={`${this.state.activeTab === 'register'}`}
                id="register"
              >
                Sign Up
              </StyledLink>
            </Li>
          </NavForNotLoggedIn>

          <NavForLoggedIn showMenu={this.state.menuOpened && this.props.isLoggedIn}>
            <Li>
              <StyledLink
                to={'/trips/all'}
                title="Your trips"
                onClick={(e) => this.setChoosen(e)}
                active={`${this.state.activeTab === 'trips/all'}`}
                id="trips/all"
              >
                Trips
              </StyledLink>
            </Li>
            <Li>
              <StyledLink
                to={'/users/profile'}
                title="Settings"
                onClick={(e) => this.setChoosen(e)}
                active={`${this.state.activeTab === 'profile'}`}
                id="profile"
              >
                Settings
              </StyledLink>
            </Li>
            <Li>
              <Button onClick={this.logOut}>Log out</Button>
            </Li>
          </NavForLoggedIn>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedOut: () => dispatch(setLoggedOut()),
    clearState: () => dispatch(clearState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
