import React from 'react';
import ReactDOM from 'react-dom/client';
import Stopwatch from './stopwatch';

export {
  React,
  ReactDOM,
  Stopwatch
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Stopwatch />);
