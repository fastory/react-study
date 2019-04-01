import React from 'react'
import ReactDOM from 'react-dom';
import APP from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";


const store = createStore(rootReducer);

// 创建一个组件实列，将组件挂载到元素上
ReactDOM.render(
  <Provider store={store}>
    <APP />
  </Provider>,
  document.getElementById("app")
);