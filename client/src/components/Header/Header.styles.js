import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  ${({ theme }) => css`
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
  `};
`;

export const StyledTopLabel = styled.div`
  ${({ theme }) => css`
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
  `};
`;

export const StyledLogoLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
`;

export const StyledLogo = styled.img`
  height: 35px;
  margin-right: 20px;
`;

export const StyledTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.neutralDark};
    font-family: ${theme.fonts.special};
    font-size: 24px;
    font-weight: normal;
    margin: 0;
  `};
`;

export const StyledButton = styled.button`
  ${({ theme }) => css`
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
  `};
`;

export const StyledToggleNavOpenButton = styled(StyledButton)`
  ${({ theme }) => css`
    color: ${theme.colors.neutralDark};
    ${theme.media.tablet} {
      display: none;
    }
  `};
`;

export const StyledNav = styled.nav`
  width: 100%;
`;

const StyledUl = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 15px 25px;
  width: 100%;
`;

export const StyledNavForNotLoggedIn = styled(StyledUl)`
  display: ${(props) => (props.showMenu ? 'flex' : 'none')};
  justify-content: flex-end;
`;

export const StyledNavForLoggedIn = styled(StyledUl)`
  ${({ theme }) => css`
    display: ${(props) => (props.showMenu ? 'flex' : 'none')};
    justify-content: space-between;
    ${theme.media.tablet} {
      justify-content: flex-end;
    }
  `};
`;

export const StyledLi = styled.li`
  list-style: none;
  padding: 0 25px;
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    color: ${(props) =>
      props.active === 'true' ? theme.colors.neutralDark : theme.colors.neutralMidLight};
    color: ${theme.colors.neutralDark};
    font-size: 16px;
    text-decoration: none;
    &:hover {
      color: ${theme.colors.btnMain};
    }
  `};
`;
