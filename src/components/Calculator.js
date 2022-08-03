/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <section id="calculator-container">
        <div id="calculator">
          <input type="text" id="calc-display" value="0" />

          <div id="calculator-buttons">
            <button type="button" className="btn">AC</button>
            <button type="button" className="btn">+/-</button>
            <button type="button" className="btn">%</button>
            <button type="button" className="btn orange">÷</button>
            <button type="button" className="btn">7</button>
            <button type="button" className="btn">8</button>
            <button type="button" className="btn">9</button>
            <button type="button" className="btn orange">x</button>
            <button type="button" className="btn">4</button>
            <button type="button" className="btn">5</button>
            <button type="button" className="btn">6</button>
            <button type="button" className="btn orange">-</button>
            <button type="button" className="btn">1</button>
            <button type="button" className="btn">2</button>
            <button type="button" className="btn">3</button>
            <button type="button" className="btn orange">+</button>
            <button type="button" className="btn span-2">0</button>
            <button type="button" className="btn">.</button>
            <button type="button" className="btn orange">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
