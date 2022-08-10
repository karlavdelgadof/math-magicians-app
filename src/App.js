import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/navBar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main id="main-section">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
