import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogoImg from '../../images/logo.png';
import { clearState, setLoggedOut } from '../../redux/actions/userActions';
import {
  StyledButton,
  StyledHeaderWrapper,
  StyledLi,
  StyledLink,
  StyledLogo,
  StyledLogoLink,
  StyledNav,
  StyledNavForLoggedIn,
  StyledNavForNotLoggedIn,
  StyledTitle,
  StyledToggleNavOpenButton,
  StyledTopLabel,
} from './Header.styles';

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
      <StyledHeaderWrapper>
        <StyledTopLabel>
          <StyledLogoLink to={'/'} title="HomePage">
            <StyledLogo src={LogoImg} alt="Trip Expenses App"></StyledLogo>
            <StyledTitle>Trip Expenses</StyledTitle>
          </StyledLogoLink>
          <StyledToggleNavOpenButton onClick={this.toggleMenu}>
            <FontAwesomeIcon size="lg" icon={this.state.menuOpened ? faTimes : faBars} />
          </StyledToggleNavOpenButton>
        </StyledTopLabel>

        <StyledNav>
          <StyledNavForNotLoggedIn showMenu={this.state.menuOpened && !this.props.isLoggedIn}>
            <StyledLi>
              <StyledLink
                to={'/users/login'}
                title="Login"
                onClick={(e) => this.setChoosen(e)}
                active={`${this.state.activeTab === 'login'}`}
                id="login"
              >
                Login
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink
                to={'/users/register'}
                title="Sign Up"
                onClick={(e) => this.setChoosen(e)}
                active={`${this.state.activeTab === 'register'}`}
                id="register"
              >
                Sign Up
              </StyledLink>
            </StyledLi>
          </StyledNavForNotLoggedIn>

          <StyledNavForLoggedIn showMenu={this.state.menuOpened && this.props.isLoggedIn}>
            <StyledLi>
              <StyledLink
                to={'/trips/all'}
                title="Your trips"
                onClick={(e) => this.setChoosen(e)}
                active={`${this.state.activeTab === 'trips/all'}`}
                id="trips/all"
              >
                Trips
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink
                to={'/users/profile'}
                title="Settings"
                onClick={(e) => this.setChoosen(e)}
                active={`${this.state.activeTab === 'profile'}`}
                id="profile"
              >
                Settings
              </StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledButton onClick={this.logOut}>Log out</StyledButton>
            </StyledLi>
          </StyledNavForLoggedIn>
        </StyledNav>
      </StyledHeaderWrapper>
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
