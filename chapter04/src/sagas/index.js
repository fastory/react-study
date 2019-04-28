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
    console.log("addUserFlow");
  while (true) {
    let request = yield take('ADD_USER');
    let response = yield call(addUser, request.index);
    let tempList = yield select(state => state.users);
    let list = [];
    list = list.concat(tempList);
    list.splice(request.index, 1);
    // yield put({
    //   type: 'UPDATE_USER',
    //   data: list
    // });
  }
}

export function* watchAndLog () {
  yield takeEvery('*', function* logger (action) {
    const state = yield select()
    console.log('action', action)
    console.log('state after', state)
  })
}

// export default function* rootSaga() {
//   yield fork(addUserFlow);
// }

