import styled, { css } from 'styled-components';

export const StyledChip = styled.span`
  ${({ theme }) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.neutralMidDark};
    border-radius: 0.5em;
    display: inline-block;
    font-size: 0.7em;
    font-weight: bold;
    line-height: 1;
    margin: 0.2em;
    padding: 0.5em 0.5em 0.4em;
    text-align: center;
    text-transform: uppercase;
  `};
`;
