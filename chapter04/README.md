#### 这是第四章

webpack4+react+scss+antd+react-router+react-redux+react-saga

##### 目录结构
> - components UI组件
> - containers 容器组件
> - routers 相关路由控制

##### 知识点

> - react-redux   [API文档](http://cn.redux.js.org/docs/basics/Store.html)
> - react-saga    [API文档](https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html)

#####  函数组件

##### react-redux 

```
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

 const store = createStore(rootReducer);

    // 创建一个组件实列，将组件挂载到元素上	// 创建一个组件实列，将组件挂载到元素上
    ReactDOM.render(<APP />, document.getElementById('app')); 	
    ReactDOM.render(  <Provider store={store}>  
        <APP />
    </Provider>,
    document.getElementById("app")
    );
```

![redux流程](https://github.com/fastory/react-study/blob/master/chapter04/img/redux.png)

#####  react-saga
> - 使用需要ES7的语法，在babel编译的.babelrc文件中增加"transform-runtime",
> - 流程

![saga流程](https://github.com/fastory/react-study/blob/master/chapter04/img/saga.png)

```
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
```
#####




