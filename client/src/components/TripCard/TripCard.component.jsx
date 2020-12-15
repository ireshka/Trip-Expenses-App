import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PinImage from '../../images/pin.png';
import { setChoosenTrip } from '../../redux/actions/userActions';
import { theme } from '../../utils/theme';
import { H4, InputCheckboxContainer, Label, LinkButtonSmall } from '../styled';

const Card = styled.div`
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.status === 'open' ? theme.colors.trip : theme.colors.neutralMidLight};
  border-radius: 5px 5px 0 0;
  color: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  min-height: 34px;
`;

const CardTitle = styled(H4)`
  margin: 0 0 0 20px;
`;

const CardBody = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid
    ${(props) => (props.status === 'open' ? theme.colors.trip : theme.colors.neutralMidLight)};
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 0;
`;

const ParagraphAlignedLeft = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 8px 0;
  text-align: left;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
`;
const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: space-between;
  margin: 0 auto;
`;

const CustomSmallButton = styled(LinkButtonSmall)`
  flex-grow: 1;
  margin: 0px 10px 20px;
  min-width: 150px;
  width: 40%;
`;

const InputCheckboxCustom = styled.input`
  margin: 0 10px 5px 0;
`;

const InputCheckboxContainerCustom = styled(InputCheckboxContainer)`
  margin-bottom: 15px;
`;

const PinImg = styled.img`
  height: 20px;
  margin: 0 0 0 20px;
`;

const TripCard = (props) => {
  let status = props.trip.isTripFinished ? 'finished' : 'open';
  const { name, startDate, description, _id, mainCurrency } = props.trip;

  return (
    <Card>
      <CardHeader status={status}>
        {props.inPinnedTrips && <PinImg src={PinImage} alt="Pin" />}
        <CardTitle>{name}</CardTitle>
      </CardHeader>

      <CardBody status={status}>
        <Container>
          <ParagraphAlignedLeft>
            start date: &nbsp; {moment(startDate).format('YYYY-MM-DD')}
          </ParagraphAlignedLeft>
          {description && <ParagraphAlignedLeft>{description}</ParagraphAlignedLeft>}
          <InputCheckboxContainerCustom>
            <InputCheckboxCustom
              type="checkbox"
              name="isPinned"
              id={`isPinned-${_id}`}
              onChange={props.onInputChange}
              checked={props.inPinnedTrips}
            />
            <Label htmlFor={`isPinned-${_id}`}>Pin trip to the main page</Label>
          </InputCheckboxContainerCustom>
          <ContainerButtons>
            <CustomSmallButton
              onClick={() => props.setChoosenTrip(_id, name, mainCurrency)}
              to={`/trips/single/${_id}`}
              color="grey"
            >
              {' '}
              Details{' '}
            </CustomSmallButton>
            <CustomSmallButton
              onClick={() => props.setChoosenTrip(_id, name, mainCurrency)}
              to={`/trips/edit/${_id}`}
              color="greyOutline"
            >
              {' '}
              Edit / Delete{' '}
            </CustomSmallButton>
          </ContainerButtons>
        </Container>
      </CardBody>
    </Card>
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
