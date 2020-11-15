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
    const url = '/api/users/login';
    this.setState({ error: '' });
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
      <ContentWrapper title="Login">
        <ErrorMessage error={errorGeneral}></ErrorMessage>

        <Form onSubmit={this.handleFormSubmit}>
          <Label htmlFor="login-username">User name:</Label>
          <Input
            type="text"
            name="username"
            id="login-username"
            placeholder="User name"
            required
            // Todo: ??? rewrite without bind
            onChange={this.handleInputChange.bind(this, 'username')}
            value={this.state.username}
          />
          <ErrorMessage error={errorUser}></ErrorMessage>

          <Label htmlFor="login-password">Password:</Label>
          <Input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            required
            onChange={this.handleInputChange.bind(this, 'password')}
            value={this.state.password}
          />
          <ErrorMessage error={errorPassword}></ErrorMessage>

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
