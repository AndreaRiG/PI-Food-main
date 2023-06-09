import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {store} from "./redux/store/index";
import {Provider} from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <App />      
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
 
