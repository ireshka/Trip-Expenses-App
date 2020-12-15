import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-image: linear-gradient(${theme.colors.bgOverlay}, ${theme.colors.bgOverlay}),
      url('/images/bg-1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 300px;
  `};
`;
