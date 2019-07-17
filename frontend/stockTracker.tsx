import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './store/store';
import '../assets/css/App.css';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  render(<App store={store} />, document.getElementById('root'));
});
