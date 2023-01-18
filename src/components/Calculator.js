/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  handleClick = (e) => {
    const buttonElement = e.target.innerHTML;
    this.setState((lastState) => ({ ...calculate(lastState, buttonElement) }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (

      <div className="text-center mx-auto d-grid my-3 w-100 calculator-container">
        <p type="text" className="text-end border border-0 mx-0 fw-bold text-white input-text my-0">
          { next || operation || total || ''}
        </p>
        <div className="row row-cols-4 my-0 mb-1 g-1 justify-content-around mx-0">
          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>AC</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>+/-</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>%</button>
          </div>
          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100 bg-wa operation" onClick={this.handleClick}>÷</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>7</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>8</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>9</button>
          </div>
          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100 bg-wa operation" onClick={this.handleClick}>x</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>4</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>5</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>6</button>
          </div>
          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100 operation" onClick={this.handleClick}>-</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>1</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>2</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>3</button>
          </div>
          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100 operation" onClick={this.handleClick}>+</button>
          </div>

          <div className="col-6">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>0</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100" onClick={this.handleClick}>.</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100 operation" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
