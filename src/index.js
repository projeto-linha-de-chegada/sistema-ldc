import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route} from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
  {<App />}
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();