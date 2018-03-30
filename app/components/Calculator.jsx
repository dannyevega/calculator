import React from 'react';

class Calculator extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      result: 0,
      firstInput: '',
      secondInput: ''
    }

    this.handleFirst = this.handleFirst.bind(this);
    this.handleSecond = this.handleSecond.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleSubtraction = this.handleSubtraction.bind(this);
    this.handleMultiplication = this.handleMultiplication.bind(this);
    this.handleDivision = this.handleDivision.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  handleFirst(e) {
    let firstInput = e.target.value ? parseInt(e.target.value) : "";;
    this.setState({ firstInput });
  }
  handleSecond(e) {
    let secondInput = e.target.value ? parseInt(e.target.value) : "";;
    this.setState({ secondInput });
  }
  handleAddition(e) {
    e.preventDefault();
    const result = this.state.firstInput + this.state.secondInput;
    this.setState({ result });
  }
  handleSubtraction(e) {
    e.preventDefault();
    const result = this.state.firstInput - this.state.secondInput;
    this.setState({ result });       
  }
  handleMultiplication(e) {
    e.preventDefault();
    const result = this.state.firstInput * this.state.secondInput;
    this.setState({ result });     
  }
  handleDivision(e) {
    e.preventDefault();
    const result = this.state.firstInput / this.state.secondInput;
    this.setState({ result });     
  }
  clearInput(e) {
    e.preventDefault();
    this.setState({ result: 0, firstInput: '', secondInput: '' });           
  }
  render(){
    const { firstInput, secondInput, result } = this.state;
    return (
      <div className='container'>
        <div className='column'>
          <h1 className='header'>React Calculator</h1>
          <p>Result: {this.state.result}</p>        
        </div>
        <div className='row'>
          <form className='column'>
            <label htmlFor='number'>
              1st Number
            </label>
            <input
              placeholder='first number'
              type='text'
              value={this.state.firstInput}
              autoComplete='off'
              onChange={this.handleFirst}
            />
          </form> 
          <form className='column'>
            <label htmlFor='number'>
              2nd Number
            </label>
            <input
              placeholder='second number'
              type='text'
              value={this.state.secondInput}
              autoComplete='off'
              onChange={this.handleSecond}
            />
          </form>        
        </div>
        <div className='row'>
          <button onClick={this.handleAddition}
            className='button'>
              +
          </button>
          <button onClick={this.handleSubtraction}
            className='button'>
              -
          </button>
          <button onClick={this.handleMultiplication}
            className='button'>
              *
          </button>
          <button onClick={this.handleDivision}
            className='button'>
              /
          </button>
          <button onClick={this.clearInput}
            className='button'>
              Clear
          </button>          
        </div>
      </div>
    );
  }
}

export default Calculator;
