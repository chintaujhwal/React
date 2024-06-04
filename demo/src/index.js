import React from 'react';
import ReactDOM from 'react-dom/client';
import Customer from './properties/Customer';

// let courses = [
//   {title: 'Node', fee: 2500},
//   {title: 'Express', fee: 1500},
//   {title: 'React', fee: 5000},
//   {title: 'Python', fee: 3500}
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Customer name='Eleven Wheeler' email='elevenwheeler@gmail.com' age={20}/>
  </React.StrictMode>
);