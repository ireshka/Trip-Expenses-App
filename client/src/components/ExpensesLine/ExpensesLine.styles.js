import styled, { css } from 'styled-components';

import { LinkButtonSmall } from '../styled';

export const StyledExpenseButtonSmall = styled(LinkButtonSmall)`
  align-content: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const StyledExpenseButtonText = styled.span`
  line-height: 1;
  margin: 0;
  padding: 0;
`;

export const StyledExpenseLineWrapper = styled.li`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.neutralMidLight};
    padding: 0.5rem 0;

    &:nth-child(odd) {
      background-color: ${theme.colors.neutralExtraLight};
    }
  `};
`;

export const StyledExpenseCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas:
      'name name'
      'category cost'
      'action action';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    padding: 0 0.5rem;
    ${theme.media.landscapePhone} {
      grid-template-areas:
        'name name name'
        'category cost action';
      grid-template-columns: 1fr 1fr 1fr;
    }
  `};
`;

const StyledExpenseDetail = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledExpenseNameWrapper = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  grid-area: name;
  padding: 0.5rem 0;
`;

export const StyledExpenseCategoryWrapper = styled(StyledExpenseDetail)`
  grid-area: category;
`;

export const StyledExpenseCostWrapper = styled(StyledExpenseDetail)`
  ${({ theme }) => css`
    grid-area: cost;
    text-align: right;
    ${theme.media.landscapePhone} {
      text-align: left;
    }
  `};
`;

export const StyledExpenseButtonWrapper = styled.div`
  grid-area: action;
`;
