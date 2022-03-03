import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Home from './pages/Home';
import Create from './pages/Create';

const alertOptions = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Provider template={AlertTemplate} {...alertOptions}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-bookmark" element={<Create />} />
            </Routes>
            {/* <App /> */}
          </Provider>
  </BrowserRouter>
  </React.StrictMode>
 ,
  document.getElementById('root')
);

