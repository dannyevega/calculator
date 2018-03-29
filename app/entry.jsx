import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Calculator />, 
    document.getElementById('main')
  );
});
