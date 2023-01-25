/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [value, setCalculator] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handleClick = (e) => {
    const buttonElement = e.target.innerHTML;
    setCalculator((lastState) => ({ ...calculate(lastState, buttonElement) }));
  };

  return (
    <div className="container-fluid d-flex py-5 justify-content-center px-4 align-content-center ">
      <div className="flex-fill">
        <h4>Let us do the math!</h4>
      </div>
      <div className="flex-fill justify-content-center border border-2 border-dark py-3">
        <div className="text-center mx-auto d-grid my-3 w-100 calculator-container ">
          <p type="text" className="text-end border border-0 mx-0 fw-bold text-white input-text my-0">
            { value.next || value.operation || value.total || ''}
          </p>
          <div className="row row-cols-4 my-0 mb-1 g-1 justify-content-around mx-0">
            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>AC</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>+/-</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>%</button>
            </div>
            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100 bg-wa operation" onClick={handleClick}>÷</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>7</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>8</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>9</button>
            </div>
            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100 bg-wa operation" onClick={handleClick}>x</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>4</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>5</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>6</button>
            </div>
            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100 operation" onClick={handleClick}>-</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>1</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>2</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>3</button>
            </div>
            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100 operation" onClick={handleClick}>+</button>
            </div>

            <div className="col-6">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>0</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100" onClick={handleClick}>.</button>
            </div>

            <div className="col">
              <button type="button" className="btn col-3 rounded-0 w-100 operation" onClick={handleClick}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
