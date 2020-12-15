import styled, { css } from 'styled-components';

export const StyledErrorBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.errorMsgBg};
    border: 1px solid ${theme.colors.errorMsgBorder};
    border-radius: ${theme.radius.sm};
    color: ${theme.colors.errorMsgText};
    font-size: 14px;
    margin: 0 0 20px 0;
    padding: 8px;
  `};
`;

export const StyledErrorList = styled.ul`
  list-style-position: inside;
`;
