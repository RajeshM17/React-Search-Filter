import React, { Component } from 'react';

/* Import Components */
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Datatable from '../components/DataTable';
import data from '../data/MOCK_DATA.json';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        age: '',
        gender: '',
        isMarried: '',
      },

      genderOptions: ['Male', 'Female', 'Others'],
      ageOptions: ['1-25', '26-50', '51+'],
      marriedOptions: ['Married', 'Unmarried'],
    };
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          name: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          age: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          [name]: value,
        },
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(userData);
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        age: '',
        gender: '',
        isMarried: '',
      },
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={'text'}
          title={'Full Name'}
          name={'name'}
          value={this.state.newUser.name}
          placeholder={'Enter your name'}
          handleChange={this.handleInput}
        />{' '}
        {/* Name of the user */}
        <Select
          title={'Age'}
          name={'age'}
          options={this.state.ageOptions}
          value={this.state.newUser.age}
          placeholder={'Select your age'}
          handleChange={this.handleAge}
        />{' '}
        {/* Age */}
        <Select
          title={'Gender'}
          name={'gender'}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={'Select Gender'}
          handleChange={this.handleInput}
        />{' '}
        {/* Age Selection */}
        <Select
          title={'Marital Status'}
          name={'isMarried'}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={'Select Marital Status'}
          handleChange={this.handleInput}
        />{' '}
        {/* Marital Status */}
        <Button
          action={this.handleFormSubmit}
          type={'primary'}
          title={'Submit'}
          style={buttonStyle}
        />{' '}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={'secondary'}
          title={'Clear'}
          style={buttonStyle}
        />{' '}
        {/* Clear the form */}
        <Datatable data={data} />
      </form>
    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px',
};

export default FormContainer;
