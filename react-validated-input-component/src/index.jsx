import React from 'react';
import ReactDOM from 'react-dom/client';
import ValidatedInput from './validated-input';

export {
  React,
  ReactDOM,
  ValidatedInput
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ValidatedInput />);
