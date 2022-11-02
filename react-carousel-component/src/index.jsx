import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

var imagesArray = [
  '../images/001.png',
  '../images/004.png',
  '../images/007.png',
  '../images/025.png',
  '../images/039.png'
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Carousel images={imagesArray}/>);
