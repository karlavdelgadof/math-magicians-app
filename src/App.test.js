import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

describe('Component Testing', () => {
  test('renders App component', () => {
    const component = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  test('renders Footer component', () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
  });

  test('renders Navigation component', () => {
    const component = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
