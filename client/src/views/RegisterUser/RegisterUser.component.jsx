import axios from 'axios';
import React from 'react';

import Button from '../../components/Button/Button.component';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper.component';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.component';
import { Form, Input, Label, ParagraphSmallItalic } from '../../components/styled';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }
  // hook candidate
  createErrorList = (errorList) => {
    errorList.forEach((errorElement) => {
      const { key, message } = errorElement;
      const errorState = { ...this.state.error };
      if (!errorState[key]) {
        errorState[key] = [];
        errorState[key].push(message);
      } else {
        errorState[key].push(message);
      }
      this.setState({ error: errorState });
    });
  };

  createGeneralError = () => {
    const errorState = { ...this.state.error };
    errorState['general'] = ['Error occured, try later'];
    this.setState({ error: errorState });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    const url = '/api/users/';
    this.setState({ error: '' });
    await axios
      .post(url, user)
      .then((res) => {
        console.log(res.data);
        const username = res.data.username;
        return username;
      })
      .then((username) => alert(`Hello ${username}. You've successfully register. Log in now`))
      .then(() => this.props.history.push('/users/login'))
      .catch((err) => {
        const { errorList } = err.response.data;
        console.dir(errorList);
        if (errorList) {
          this.createErrorList(errorList);
        } else {
          this.createGeneralError();
        }
      });
  };

  handleInputChange = (inputName, e) => {
    this.setState({
      [inputName]: e.target.value,
    });
  };

  render() {
    const {
      username: errorUser,
      password: errorPassword,
      general: errorGeneral,
    } = this.state.error;
    return (
      <ContentWrapper title="Sign Up">
        <Form onSubmit={this.handleFormSubmit}>
          <ErrorMessage error={errorGeneral}></ErrorMessage>

          <Label htmlFor="signup-name">User Name:</Label>
          <ParagraphSmallItalic>Username should be 4-20 characters long</ParagraphSmallItalic>
          <Input
            type="text"
            name="username"
            id="signup-name"
            placeholder="Name"
            required
            onChange={this.handleInputChange.bind(this, 'username')}
            value={this.state.username}
          />
          <ErrorMessage error={errorUser}></ErrorMessage>

          <Label htmlFor="signup-password">Password:</Label>
          <ParagraphSmallItalic>
            Password should be minimum 8 characters long and should contain a number, a lowercase, a
            capital letter and special character (!@#$%^&amp;)
          </ParagraphSmallItalic>
          <Input
            type="password"
            name="password"
            id="signup-password"
            placeholder="Password"
            required
            onChange={this.handleInputChange.bind(this, 'password')}
            value={this.state.password}
          />
          <ErrorMessage error={errorPassword}></ErrorMessage>

          <Button textOnButton="Sign Up" textColor="#fff" btnColor="#2EC66D" btnBorder="none" />
        </Form>
      </ContentWrapper>
    );
  }
}

export default Signup;
