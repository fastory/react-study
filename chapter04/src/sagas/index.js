import { put, call, select, take, takeEvery} from "redux-saga/effects";

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function* addUser() {
  try {
    console.log("addUser");
    return yield call(delay, 500);
  } catch (err) {
    yield put({ type: 'ERROR'});
  }
}

export function* addUserFlow() {
  while (true) {
    let request = yield take('ADD_USER');   // 阻塞: 将等待 action
    let response = yield call(addUser, request.index);   // 阻塞: 将等待 addUser(如果 addUser返回一个 Promise 的话)
    let tempList = yield select(state => state.users);
    let list = [];
    list = list.concat(tempList);
    console.log("addUserFlow",list);
    yield put({                     // 阻塞: 将同步发起 action (使用 Promise.then)
      type: 'UPDATE_USER',
      data: list
    });
  }
}

export function* watchAndLog () {
  //使用 takeEvery('*')（使用通配符 * 模式），我们就能捕获发起的所有类型的 action。
  yield takeEvery('*', function* logger (action) {
    const state = yield select()
    console.log('action', action)
    console.log('state after', state)
  })
}
