import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(CustomButton());
