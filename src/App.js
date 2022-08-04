import React from 'react';
import Navigation from './components/navBar';
import Calculator from './components/Calculator';
import Footer from './components/footer';

function App() {
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

export default App;
