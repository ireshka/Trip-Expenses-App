import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';

import PinImage from '../../images/pin.png';
import { setChoosenTrip } from '../../redux/actions/userActions';
import { Label } from '../styled';
import {
  StyledCard,
  StyledCardBody,
  StyledCardHeader,
  StyledCardTitle,
  StyledContainer,
  StyledContainerButtons,
  StyledCustomSmallButton,
  StyledInputCheckboxContainerCustom,
  StyledInputCheckboxCustom,
  StyledParagraphAlignedLeft,
  StyledPinImg,
} from './TripCard.styles';

const TripCard = (props) => {
  let status = props.trip.isTripFinished ? 'finished' : 'open';
  const { name, startDate, description, _id, mainCurrency } = props.trip;

  return (
    <StyledCard>
      <StyledCardHeader status={status}>
        {props.inPinnedTrips && <StyledPinImg src={PinImage} alt="Pin" />}
        <StyledCardTitle>{name}</StyledCardTitle>
      </StyledCardHeader>

      <StyledCardBody status={status}>
        <StyledContainer>
          <StyledParagraphAlignedLeft>
            start date: &nbsp; {moment(startDate).format('YYYY-MM-DD')}
          </StyledParagraphAlignedLeft>
          {description && <StyledParagraphAlignedLeft>{description}</StyledParagraphAlignedLeft>}
          <StyledInputCheckboxContainerCustom>
            <StyledInputCheckboxCustom
              type="checkbox"
              name="isPinned"
              id={`isPinned-${_id}`}
              onChange={props.onInputChange}
              checked={props.inPinnedTrips}
            />
            <Label htmlFor={`isPinned-${_id}`}>Pin trip to the main page</Label>
          </StyledInputCheckboxContainerCustom>
          <StyledContainerButtons>
            <StyledCustomSmallButton
              onClick={() => props.setChoosenTrip(_id, name, mainCurrency)}
              to={`/trips/single/${_id}`}
              color="grey"
            >
              {' '}
              Details{' '}
            </StyledCustomSmallButton>
            <StyledCustomSmallButton
              onClick={() => props.setChoosenTrip(_id, name, mainCurrency)}
              to={`/trips/edit/${_id}`}
              color="greyOutline"
            >
              {' '}
              Edit / Delete{' '}
            </StyledCustomSmallButton>
          </StyledContainerButtons>
        </StyledContainer>
      </StyledCardBody>
    </StyledCard>
  );
};

const mapStateToProps = (state) => {
  return {
    choosenTrip: state.choosenTrip,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setChoosenTrip: (id, name, mainCurrency) => dispatch(setChoosenTrip(id, name, mainCurrency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripCard);
