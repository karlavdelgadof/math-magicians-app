/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
      err: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const calc = calculate(this.state, event.target.textContent);
    this.setState(calc);
  };

  render() {
    const {
      total,
      next,
      err,
      operation,
    } = this.state;
    return (
      <section id="calculator-container">
        <div id="calculator">
          <div id="calc-display">
            { next || operation || total || err || 0}
          </div>

          <div id="calculator-buttons">
            <button type="button" onClick={this.handleClick} className="btn">AC</button>
            <button type="button" onClick={this.handleClick} className="btn">+/-</button>
            <button type="button" onClick={this.handleClick} className="btn">%</button>
            <button type="button" onClick={this.handleClick} className="btn orange">÷</button>
            <button type="button" onClick={this.handleClick} className="btn">7</button>
            <button type="button" onClick={this.handleClick} className="btn">8</button>
            <button type="button" onClick={this.handleClick} className="btn">9</button>
            <button type="button" onClick={this.handleClick} className="btn orange">x</button>
            <button type="button" onClick={this.handleClick} className="btn">4</button>
            <button type="button" onClick={this.handleClick} className="btn">5</button>
            <button type="button" onClick={this.handleClick} className="btn">6</button>
            <button type="button" onClick={this.handleClick} className="btn orange">-</button>
            <button type="button" onClick={this.handleClick} className="btn">1</button>
            <button type="button" onClick={this.handleClick} className="btn">2</button>
            <button type="button" onClick={this.handleClick} className="btn">3</button>
            <button type="button" onClick={this.handleClick} className="btn orange">+</button>
            <button type="button" onClick={this.handleClick} className="btn span-2">0</button>
            <button type="button" onClick={this.handleClick} className="btn">.</button>
            <button type="button" onClick={this.handleClick} className="btn orange">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
