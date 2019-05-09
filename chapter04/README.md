#### 这是第四章

webpack4+react+scss+antd+react-router+react-redux+react-saga

##### 目录结构
> - components UI组件
> - containers 容器组件
> - routers 相关路由控制

##### 知识点

> - react-redux   [API文档](http://cn.redux.js.org/docs/basics/Store.html)
> - react-saga    [API文档](https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html)
> - [Generator(生成器)](http://www.cnblogs.com/diligenceday/p/5488037.html#_label6)
> - [mapStateToProps/mapDispatchToProps使用](https://blog.csdn.net/genius_yym/article/details/64130120)
> - [mapStateToProps/mapDispatchToProps理解](https://www.cnblogs.com/hanmeimei/p/8820277.html)

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
> - redux-saga 就是用来处理副作用（异步任务）的一个中间件。它是一个接收事件，并可能触发新事件的过程管理者，为你的应用管理复杂的流程
> - 使用需要ES7的语法，在babel编译的.babelrc文件中增加"transform-runtime",
> - 在向 store 发起 action 时，middleware 首先会把 action 转发给 reducers，然后通知 Sagas。这意味着，当你查询 Store 的 state 时，你获得的是 action 被应用 后 的 state。 但是，只有当所有后续中间件都以同步的形式调用 next(action) 时，才能保证此行为。如果有任何后续 middleware 异步地调用 next(action)（虽然不常见，但存在这种可能），那么 saga 会在 action 被应用 前 获得 state。因此，建议检查每一个后续的 middleware 的来源，以确保是通过同步的形式调用 next(action)；或者确保 redux-saga 是调用链中的最后一个中间件。
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
> - 优点:
>   1. 保证action和reducer的纯洁，(reducer是纯函数，action是触发)
>   2. 在saga中实现以同步方式写异步操作，容易理解，逻辑清晰
##### ES6中的generator

>  generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次。

```
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}
var it = foo(1);
console.log(it);          //  foo {<suspended>}
console.log(a.__proto__);          //  Generator {}
console.log(it.next());   // {value: 2, done: false}
console.log(it.next());   // {value: 3, done: false}
console.log(it.next()); // {value: 4, done: true}
console.log(it.next()); // {value: undefined, done: true}
```
>  [Generator和async/await](https://www.zhihu.com/question/290681846)



