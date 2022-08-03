/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Navigation from './components/navBar';
import Calculator from './components/Calculator';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main id="main-section">
          <Calculator />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
