import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'redux';
import { configureStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = configureStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
