import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

ReactDOM.render(
  <BrowserRouter>
    <Provider template={AlertTemplate} {...alertOptions}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

