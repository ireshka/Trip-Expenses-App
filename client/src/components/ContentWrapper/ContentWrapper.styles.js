import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

export const StyledTitleWrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 4px 4px ${theme.colors.neutralExtraLight};
    display: flex;
    height: 70px;
    justify-content: center;
    margin-bottom: 30px;
    ${theme.media.landscapePhone} {
      border-radius: ${theme.radius.bg} ${theme.radius.bg} 0 0;
    }
  `};
`;

export const StyledWrapper = styled.div`
  ${({ theme }) => css`
    background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 5px ${theme.colors.neutralMidDark};
    display: flex;
    flex-direction: column;
    margin: 40px auto 40px;
    max-width: 600px;
    padding-bottom: 20px;
    width: 100%;
    ${theme.media.landscapePhone} {
      border-radius: ${theme.radius.bg};
      width: 90%;
    }
  `};
`;
