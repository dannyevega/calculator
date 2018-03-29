import React from 'react';
// questions for Kelly:
// how can I separate the forms into another component? I got confused on how to pass data back and forth to update the result -- see UserInput component below
// how come destructuring on this.setState isnt working for me?
// I was initially using onSubmit for buttons then changed it to onClick -- why wont it work with onSubmit?

// class UserInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       number: ''
//     }

//     this.handleChange = this.handleChange.bind(this);
//   }     
//   render() {
//     return (
//       <form className='column'>
//         <label htmlFor='number'>
//           {this.props.label}
//         </label>
//         <input
//           placeholder='number'
//           type='text'
//           value={this.state.number}
//           autoComplete='off'
//           onChange={this.handleChange}
//         />
//       </form>       
//     )
//   }
// }
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
    let value = e.target.value ? parseInt(e.target.value) : "";;

    this.setState(function() {
      return {
        firstInput: value
      }
    });
  }
  handleSecond(e) {
    let value = e.target.value ? parseInt(e.target.value) : "";;

    this.setState(function() {
      return {
        secondInput: value
      }
    });
  }
  handleAddition(e) {
    e.preventDefault();
    const value = this.state.firstInput + this.state.secondInput;
    this.setState(function() {
      return {
        result: value
      }
    });    
  }
  handleSubtraction(e) {
    e.preventDefault();
    const value = this.state.firstInput - this.state.secondInput;
    this.setState(function() {
      return {
        result: value
      }
    });        
  }
  handleMultiplication(e) {
    e.preventDefault();
    const value = this.state.firstInput * this.state.secondInput;
    this.setState(function() {
      return {
        result: value
      }
    });     
  }
  handleDivision(e) {
    e.preventDefault();
    const value = this.state.firstInput / this.state.secondInput;
    this.setState(function() {
      return {
        result: value
      }
    });     
  }
  clearInput(e) {
    e.preventDefault();
    this.setState(function() {
      return {
        result: 0,
        firstInput: '',
        secondInput: ''
      }
    })    
  }
  render(){
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
