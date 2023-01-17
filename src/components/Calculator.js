/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

class Calculator extends React.Component {
  render() {
    return (

      <div className="text-center mx-auto d-grid my-3 w-100 calculator-container">
        <input
          type="text"
          className="text-end border border-0 mx-0 fw-bold text-white input-text"
        />
        <div className="row row-cols-4 my-0 mb-1 g-1 justify-content-around mx-0">
          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">AC</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">+/-</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">%</button>
          </div>
          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100 bg-wa operation">÷</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">7</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">8</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">9</button>
          </div>
          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100 bg-wa operation">x</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">4</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">5</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">6</button>
          </div>
          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100 operation">-</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">1</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">2</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">3</button>
          </div>
          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100 operation">+</button>
          </div>

          <div className="col-6">
            <button type="button" className="btn col-3 rounded-0 w-100">0</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100">.</button>
          </div>

          <div className="col">
            <button type="button" className="btn col-3 rounded-0 w-100 operation">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
