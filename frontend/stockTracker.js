import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './store/store';
import { setSampleState } from './sampleState';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(setSampleState());
  window.store = store;

  render(<App store={store} />, document.getElementById('root'));
});
