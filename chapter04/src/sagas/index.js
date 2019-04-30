import { put, call, select, take, takeEvery} from "redux-saga/effects";

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function* addUser() {
  try {
    return yield call(delay, 500);
  } catch (err) {
    yield put({ type: 'ERROR'});
  }
}

export function* addUserFlow() {
  while (true) {
    let request = yield take('ADD_USER');
    let response = yield call(addUser, request.index);
    let tempList = yield select(state => state.users);
    let list = [];
    list = list.concat(tempList);
    console.log("addUserFlow",list);
    yield put({
      type: 'UPDATE_USER',
      data: list
    });
  }
}

export function* watchAndLog () {
  yield takeEvery('*', function* logger (action) {
    const state = yield select()
    console.log('action', action)
    console.log('state after', state)
  })
}
