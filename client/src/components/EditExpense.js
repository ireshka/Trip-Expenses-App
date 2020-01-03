import React, { Component } from 'react'; 
import axios from 'axios';
import Button from './Button';
import { Title, Form, Label, Input, Wrapper, customStyleSelect } from './styled';
import Select from 'react-select';

class EditExpense extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "", 
      category: "",
      cost: "",
      currency: "",
      optionsCurrencies: [
        { value: 'PLN', label: 'PLN' },
        { value: 'USD', label: 'USD' },
        { value: 'EUR', label: 'EUR' },
        { value: 'GBP', label: 'GBP' },
        { value: 'JPY', label: 'JPY' },
        { value: 'AUD', label: 'AUD' },
        { value: 'CAD', label: 'CAD' },
        { value: 'CHF', label: 'CHF' }
      ],
      optionsCategories: [
        { value: 'food', label: 'food' },
        { value: 'travel', label: 'travel' },
        { value: 'tickets', label: 'tickets' },
        { value: 'accomodation', label: 'accomodation' },
        { value: 'health and insurance', label: 'health and insurance' },
        { value: 'other', label: 'other' }
      ]
    }
  }

  onInputChange = (e) => {
    const target = e.target;
    const value = target.value; 
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onSelectCurrencyChange = (optionsObject) => {
    const value = optionsObject.value; 
    this.setState({
      currency: value
    });
  }

  onSelectCategoryChange = (optionsObject) => {
    const value = optionsObject.value; 
    this.setState({
      category: value
    });
  }

  onEditSubmit = (e) => { 
    e.preventDefault();
    const expense = {
      name: this.state.name,
      category: this.state.category,
      cost: this.state.cost,
      currency: this.state.currency
    }

    axios.put(`http://localhost:3000/api/trips/5e0dd4fa618f3e1f10d4db80/expenses/` + this.state.id, expense)
      .then(res => console.log(res.data));

    // reset inputs to blank to start over again after form submit
    // this.setState({ name: "", category: "", currency: "", cost: "" })
  };

  onDeleteSubmit = (e) => {
    e.preventDefault();
    if(window.confirm("Are you sure you want to delete this expense?")) {
    axios.delete("http://localhost:3000/api/trips/5e0dd4fa618f3e1f10d4db80/expenses/" + this.state.id)
    .then(res => console.log(res.data));
    } else return;
  };

  componentDidMount () {
    axios.get("http://localhost:3000/api/trips/5e0dd4fa618f3e1f10d4db80/expenses/5e0e10274f0e0f24a0e1ec1c") // temporary two ids
      .then(res => this.setState({ 
        id: res.data.expense._id, 
        name: res.data.expense.name,
        category: res.data.expense.category,
        cost: res.data.expense.cost,
        currency: res.data.expense.currency
    }));
  }
 
  render() {
    return (
      <Wrapper>
        <Title>Edit Expense</Title>
        <Form onSubmit={this.onEditSubmit}>

          <Label htmlFor="name-exp-add">Name (3-30 characters):</Label>
          <Input minlength="3" maxlength="30" type="text" name="name" id="name-exp-add" placeholder="Name" required onChange={this.onInputChange} value={this.state.name}/>

          <Label htmlFor="amount-add">Cost (0-10000):</Label>
          <Input min="0" max="10000" type="number" name="cost" id="cost-add" placeholder="Cost amount" required onChange={this.onInputChange} value={this.state.cost}/>

          <Label htmlFor="currency-edit">Currency:</Label>
          <Select styles={customStyleSelect} options={this.state.optionsCurrencies} type="text" name="currency" id="currency-edit" placeholder="Currency" required onChange={this.onSelectCurrencyChange} value={this.state.currency.value}/>

          <Label htmlFor="category-edit">Category:</Label>
          <Select styles={customStyleSelect} options={this.state.optionsCategories} type="text" name="category" id="category-edit" placeholder="Category" required onChange={this.onSelectCategoryChange} value={this.state.category.value}/>

          <Button textOnButton="Edit" btnColor="#2EC66D" btnBorder="none"/> 

        </Form>

        <Form onSubmit={this.onDeleteSubmit}>
          <Button textOnButton="Delete" btnColor="#DC3545" btnBorder="none"/> 
        </Form>

      </Wrapper>
    )
  }
} 
  
export default EditExpense;