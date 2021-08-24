import "./custom.scss";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MirageServer } from './Server/Server';
import { Provider } from 'react-redux';
import { Store } from './State/Store';
import { BrowserRouter as Router } from "react-router-dom";

MirageServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={Store} >
    <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
