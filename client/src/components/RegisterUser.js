import axios from 'axios';
import React from 'react';
import { Form, Label, Input, ParagraphSmallItalic } from './styled';
import Button from './Button';
import ContentWrapper from './ContentWrapper';
import ErrorMessage from './ErrorMessage';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    };
  }

  onFormSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    const url = '/api/users/';
    await axios
      .post(url, user)
      .then((res) => {
        const username = res.data.username;
        return username;
      })
      .then((username) => alert(`Hello ${username}. You've successfully register. Log in now`))
      .then(() => this.props.history.push('/users/login'))
      .catch((err) => {
        if (err.response.data) {
          this.setState({ error: err.response.data.error });
        } else {
          this.setState({ error: 'Something went wrong' });
        }
      });
  };

  onInputChange = (inputName, e) => {
    this.setState({
      [inputName]: e.target.value,
    });
  };

  render() {
    return (
      <ContentWrapper title="Sign Up">
        <Form onSubmit={this.onFormSubmit}>
          <ErrorMessage error={this.state.error}></ErrorMessage>

          <Label htmlFor="signup-name">User Name:</Label>
          <ParagraphSmallItalic>Username should be 4-20 characters long</ParagraphSmallItalic>
          <Input
            type="text"
            name="username"
            id="signup-name"
            placeholder="Name"
            required
            onChange={this.onInputChange.bind(this, 'username')}
            value={this.state.username}
          />

          {/* <Label htmlFor="signup-email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="signup-email"
            placeholder="Email"
            required
            novalidate
            onChange={this.onInputChange.bind(this, 'email')}
            value={this.state.email}
          /> */}

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
            onChange={this.onInputChange.bind(this, 'password')}
            value={this.state.password}
          />

          <Button textOnButton="Sign Up" textColor="#fff" btnColor="#2EC66D" btnBorder="none" />
        </Form>
      </ContentWrapper>
    );
  }
}

export default Signup;
