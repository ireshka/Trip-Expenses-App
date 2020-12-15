import styled, { css } from 'styled-components';

import { focusStyle } from '../../utils/mixins';

export const StyledFooterWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark};
    margin-top: auto;
    padding: 10px 20px;
    text-align: center;
    width: 100%;
  `};
`;

export const StyledParagraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutralExtraLight};
    font-size: 12px;
  `};
`;

export const StyledLink = styled.a`
  ${({ theme }) => css`
    border-bottom: 0 solid transparent;
    border-radius: ${theme.radius.sm};
    color: ${theme.colors.btnMainLight};
    cursor: pointer;
    font-size: 12px;
    padding: 0 0.2rem;
    text-decoration: none;
    transition: 0.3s all;
    &:hover {
      border-bottom: 1px solid ${theme.colors.btnMainLight};
    }
    &:focus {
      ${focusStyle}
    }
  `};
`;
