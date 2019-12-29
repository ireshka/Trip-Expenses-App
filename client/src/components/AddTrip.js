import React, { Component } from 'react'; 
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 10px auto;
`
const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  color: #000;
  padding: 0;
  margin: 0;
`;

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 24px;
  color: #4B52EE;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10px;
`;

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 18px;
  color: #000;
  width: 100%;
`;

const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 18px;
  color: #000;
  display: block;
  border: 1px solid #000;
  padding: 4px;
  border-radius: 3px;
  min-height: 26px;
  width: 100%;
  margin: 10px auto;
  &::placeholder{
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #999;
  }
`;

const Textarea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 18px;
  color: #000;
  display: block;
  border: 1px solid #000;
  padding: 4px;
  border-radius: 3px;
  width: 100%;
  height: 100px;
  margin: 10px auto;
  resize: vertical;
  &::placeholder{
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #999;
  }
`;

const Button = styled.input`
  background-color: #70F4FD;
  border-radius: 7px;
  min-height: 50px;
  margin: 10px auto;
  width: 100%;
  font-size: 20px;
  border: none;
  &:hover {
    cursor: pointer;  
  } 
`;

class AddTrip extends Component {

  handleClick = () => { alert('Form submitted!')};

  giveCurrentDate = () => {
    const currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    return currentDate;
  }
  
  render() {
    return (
      <Wrapper>
        <Title>Add Trip</Title>
        <Form method="POST" action='/api/trips/add' onSubmit={this.handleClick}>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" name="name" id="name" placeholder="Name" required/>
          <Label htmlFor="date">Start date:</Label>
          <Input type="text" name="date" id="date" placeholder={this.giveCurrentDate()} required/>
          <Label htmlFor="description">Description:</Label>
          <Text>This field is optional</Text>
          <Textarea name="description" id="description" placeholder="Description"/>
          <Button type="submit" value="Add"/> 
        </Form>
      </Wrapper>
    )
  }
} 
  
export default AddTrip;