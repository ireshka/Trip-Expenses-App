import React from 'react';
import { connect } from 'react-redux';

import { setChoosenExpense } from '../../redux/actions/userActions';
import { Chip } from '../Chip/Chip.component';
import {
  StyledExpenseButtonSmall,
  StyledExpenseButtonText,
  StyledExpenseButtonWrapper,
  StyledExpenseCard,
  StyledExpenseCategoryWrapper,
  StyledExpenseCostWrapper,
  StyledExpenseLineWrapper,
  StyledExpenseNameWrapper,
} from './ExpensesLine.styles';

const ExpenseLine = (props) => {
  return (
    <StyledExpenseLineWrapper>
      <StyledExpenseCard>
        <StyledExpenseNameWrapper>{props.expense.name}</StyledExpenseNameWrapper>
        <StyledExpenseCategoryWrapper>
          <Chip content={props.expense.category} />
        </StyledExpenseCategoryWrapper>
        <StyledExpenseCostWrapper>
          {props.expense.cost} {props.expense.currency}
        </StyledExpenseCostWrapper>
        <StyledExpenseButtonWrapper>
          <StyledExpenseButtonSmall
            onClick={() => props.setChoosenExpense(props.expense._id)}
            to={`/trips/${props.tripId}/expenses/edit/${props.expense._id}`}
            color="greyOutline"
          >
            <StyledExpenseButtonText>Edit/Delete</StyledExpenseButtonText>
          </StyledExpenseButtonSmall>
        </StyledExpenseButtonWrapper>
      </StyledExpenseCard>
    </StyledExpenseLineWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    choosenExpense: state.choosenExpense,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setChoosenExpense: (id) => dispatch(setChoosenExpense(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseLine);
