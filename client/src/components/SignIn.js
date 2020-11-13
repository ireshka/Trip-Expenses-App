import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Form, Label, Input } from './styled';
import Button from './Button';
import ContentWrapper from './ContentWrapper';
import getSupportedCurrencies from '../utils/getSupportedCurrencies';
import { setLoggedIn, setCurrencyList, setUserId } from '../redux/actions/userActions';
import ErrorMessage from './ErrorMessage';

class Login extends React.Component {
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
    const url = '/api/users/login';
    await axios
      .post(url, user)
      .then((res) => {
        localStorage.setItem('travelplanner_x-auth-token', res.headers['x-auth-token']);
        return res.data.userId;
      })
      .then((userId) => this.props.setUserId(userId))
      .then(() => this.props.setLoggedIn())
      .then(() => getSupportedCurrencies())
      .then((list) => this.props.setCurrencyList(list))
      .then(() => this.props.history.push('/trips/all'))
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
      <ContentWrapper title="Login">
        <ErrorMessage error={this.state.error}></ErrorMessage>

        <Form onSubmit={this.onFormSubmit}>
          <Label htmlFor="login-username">User name:</Label>
          <Input
            type="text"
            name="username"
            id="login-username"
            placeholder="User name"
            required
            // Todo: ??? rewrite without bind
            onChange={this.onInputChange.bind(this, 'username')}
            value={this.state.username}
          />

          <Label htmlFor="login-password">Password:</Label>
          <Input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            required
            onChange={this.onInputChange.bind(this, 'password')}
            value={this.state.password}
          />

          <Button textOnButton="Login" textColor="#fff" btnColor="#2EC66D" btnBorder="none" />
        </Form>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    currencyList: state.currencyList,
    userId: state.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: () => dispatch(setLoggedIn()),
    setCurrencyList: (list) => dispatch(setCurrencyList(list)),
    setUserId: (userId) => dispatch(setUserId(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
