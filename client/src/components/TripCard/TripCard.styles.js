import styled, { css } from 'styled-components';

import { H3, LinkButtonSmall } from '../styled';

export const StyledCard = styled.div`
  margin-bottom: 20px;
`;

export const StyledCardHeader = styled.div`
  ${({ theme, status }) => css`
    align-items: center;
    background-color: ${status === 'open' ? theme.colors.trip : theme.colors.neutralMidLight};
    border-radius: 5px 5px 0 0;
    color: ${theme.colors.white};
    display: flex;
    flex-direction: row;
    min-height: 34px;
  `};
`;

export const StyledCardTitle = styled(H3)`
  margin: 0 0 0 20px;
`;

export const StyledCardBody = styled.div`
  ${({ theme, status }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${status === 'open' ? theme.colors.trip : theme.colors.neutralMidLight};
    border-radius: 0 0 5px 5px;
    display: flex;
    flex-direction: column;
    padding: 15px 0 0 0;
  `};
`;

export const StyledParagraphAlignedLeft = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 8px 0;
  text-align: left;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
`;
export const StyledContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: space-between;
  margin: 0 auto;
`;

export const StyledCustomSmallButton = styled(LinkButtonSmall)`
  flex-grow: 1;
  margin: 0px 10px 20px;
  min-width: 150px;
  width: 40%;
`;

export const StyledInputCheckboxCustom = styled.input`
  margin: 0 10px 5px 0;
`;

export const StyledInputCheckboxContainerCustom = styled.div`
  margin-bottom: 15px;
`;

export const StyledPinImg = styled.img`
  height: 20px;
  margin: 0 0 0 20px;
`;
