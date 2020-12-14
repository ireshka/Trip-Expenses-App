import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '../utils/theme';

export const H2 = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;
export const H3 = styled.h2`
  font-size: 19px;
  font-weight: 400;
`;
export const H4 = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const ParagraphAlignedCenter = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0 auto 10px;
  text-align: center;
`;

const TripNameHeaderWrapper = styled.div`
  align-items: center;
  background-color: ${theme.colors.trip};
  color: ${theme.colors.white};
  display: flex;
  height: 60px;
  justify-content: center;
  width: 100%;
`;
export const TripHeader = (prop) => {
  return (
    <TripNameHeaderWrapper>
      <H3>{prop.name}</H3>
    </TripNameHeaderWrapper>
  );
};

export const InfoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  min-height: 70px;
`;

export const InnerContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 10px;
  width: 90%;
`;

export const LinkButtonBig = styled(Link)`
  /*  You can adapt the button adding color prop. Colors prop should be one of: green, greenOutline, grey, greyOutline, disabled */
  background-color: ${(props) =>
    props.color === 'green'
      ? theme.colors.btnMain
      : props.color === 'grey'
      ? theme.colors.neutralExtraLight
      : theme.colors.white};
  border: 1px solid
    ${(props) =>
      props.color === 'green' || props.color === 'greenOutline'
        ? theme.colors.btnMain
        : props.color === 'grey'
        ? theme.colors.neutralLight
        : props.color === 'disabled'
        ? theme.colors.neutralMidLight
        : theme.colors.neutralMidDark};
  border-radius: 5px;
  box-shadow: 0 0 4px ${theme.colors.neutralLight};
  color: ${(props) =>
    props.color === 'green'
      ? theme.colors.white
      : props.color === 'greenOutline'
      ? theme.colors.btnMain
      : props.color === 'grey'
      ? theme.colors.neutralMidDark
      : props.color === 'greyOutline'
      ? theme.colors.neutralMidDark
      : props.color === 'disabled'
      ? theme.colors.neutralMidLight
      : theme.colors.neutralMidDark};
  cursor: pointer;
  display: block;
  font-size: 20px;
  font-weight: 400;
  margin: 0 auto 20px;
  min-height: 40px;
  padding: 6.5px;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.green && '#15AD54'};
    ${(props) =>
      props.color !== 'disabled' &&
      `font-weight: 600;
      box-shadow: 0 0 4px;    
    `}
  }
`;

export const LinkButtonSmall = styled(LinkButtonBig)`
  /* You can adapt the button adding color prop. See LinkButtonBig */
  font-size: 16px;
  min-height: 30px;
  padding: 0px;
`;

export const LinkText = styled(Link)`
  color: #767676;
  font-size: 16px;
  margin-bottom: 10px;
  text-decoration: none;
  &:visited {
    color: #767676;
    text-decoration: none;
  }
  &:hover {
    color: ${theme.colors.neutralMidDark};
  }
`;

export const NavLinksContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

// Formatted helpers
export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

// Forms

export const Form = styled.form`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 5px;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid ${theme.colors.neutralExtraLight};
  border-radius: 5px;
  box-shadow: 0 0 4px ${theme.colors.neutralExtraLight};
  color: ${theme.colors.neutralDark};
  display: inline-block;
  font-size: 16px;
  margin: 0 auto 20px;
  padding: 5px;
  width: 100%;
  &::placeholder {
    color: #999;
    font-size: 16px;
  }
  &:focus {
    box-shadow: 0 0 4px ${theme.colors.neutralMidLight};
    outline: none;
  }
`;

export const InputCheckbox = styled.input`
  margin: 0 15px;
`;

export const DateInput = styled(Input)`
  margin: 0;
  text-align: center;
  width: 110px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ParagraphSmallItalic = styled.p`
  color: ${theme.colors.neutralMidDark};
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  margin: 3px 0;
  padding: 0;
`;

export const Textarea = styled.textarea`
  border: 1px solid ${theme.colors.neutralLight};
  border-radius: 5px;
  color: ${theme.colors.neutralDark};
  display: block;
  font-family: ${theme.fonts.default};
  font-size: 16px;
  font-weight: 400;
  height: 100px;
  margin-bottom: 20px;
  padding: 5px;
  resize: vertical;
  width: 100%;
  &::placeholder {
    color: #999;
    font-family: ${theme.fonts.default};
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;

export const InputCheckboxContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const customStyleSelect = {
  container: (provided) => ({
    ...provided,
    marginBottom: '20px',
  }),
  option: (provided, state) => ({
    ...provided,
    color: '#000',
    padding: 2,
    fontFamily: theme.fonts.default,
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '3px',
    // border: '1px solid #000',
    fontFamily: theme.fonts.default,
  }),
  placeholder: () => ({
    fontFamily: theme.fonts.default,
  }),
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    color: 'purple',
  }),
};
