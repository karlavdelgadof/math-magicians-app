import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
    err: null,
  });

  const handleClick = (event) => {
    setState((prevState) => calculate(prevState, event.target.textContent));
  };

  return (
    <section id="calculator-container">
      <div id="calculator">
        <div id="calc-display">
          { state.next || state.operation || state.total || state.err || 0}
        </div>

        <div id="calculator-buttons">
          <button type="button" onClick={handleClick} className="btn">AC</button>
          <button type="button" onClick={handleClick} className="btn">+/-</button>
          <button type="button" onClick={handleClick} className="btn">%</button>
          <button type="button" onClick={handleClick} className="btn orange">÷</button>
          <button type="button" onClick={handleClick} className="btn">7</button>
          <button type="button" onClick={handleClick} className="btn">8</button>
          <button type="button" onClick={handleClick} className="btn">9</button>
          <button type="button" onClick={handleClick} className="btn orange">x</button>
          <button type="button" onClick={handleClick} className="btn">4</button>
          <button type="button" onClick={handleClick} className="btn">5</button>
          <button type="button" onClick={handleClick} className="btn">6</button>
          <button type="button" onClick={handleClick} className="btn orange">-</button>
          <button type="button" onClick={handleClick} className="btn">1</button>
          <button type="button" onClick={handleClick} className="btn">2</button>
          <button type="button" onClick={handleClick} className="btn">3</button>
          <button type="button" onClick={handleClick} className="btn orange">+</button>
          <button type="button" onClick={handleClick} className="btn span-2">0</button>
          <button type="button" onClick={handleClick} className="btn">.</button>
          <button type="button" onClick={handleClick} className="btn orange">=</button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
