import * as React from 'react'
import * as ReactDOM from 'react-dom';
import APP from './App';
import { createStore ,applyMiddleware} from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware  from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)


// 创建一个组件实列，将组件挂载到元素上
ReactDOM.render(
  <Provider store={store}>
    <APP />
  </Provider>,
  document.getElementById("app")
);