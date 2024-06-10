import React from 'react';
import ReactDOM from 'react-dom/client';
import Passengers from './state/Passengers';

// let courses = [
//   {title: 'Node', fee: 2500},
//   {title: 'Express', fee: 1500},
//   {title: 'React', fee: 5000},
//   {title: 'Python', fee: 3500}
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Passengers />
  </React.StrictMode>
);