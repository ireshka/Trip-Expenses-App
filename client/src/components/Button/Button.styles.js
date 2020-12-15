import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 4px ${theme.colors.neutralLight};
    color: ${theme.colors.neutralMidDark};
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    margin: 0 auto 20px;
    min-height: 40px;
    outline: none;
    text-align: center;
    transition: 0.3s;
    user-select: none;
    width: 100%;

    &:hover {
      box-shadow: 0 0 4px ${theme.colors.neutralMidLight};
      font-weight: 600;
    }
    &:focus {
      outline: none;
    }
  `};
`;
