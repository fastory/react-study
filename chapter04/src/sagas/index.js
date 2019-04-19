import { takeEvery } from 'redux-saga/effects'

import { reducers } from '../reducers';
import { put } from 'redux-saga/effects'

// Our worker Saga: 将异步执行 increment 任务
export function* incrementAsync () {
    yield delay(1000);
    yield put({ type: 'INCREMENT' });
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export default function* watchIncrementAsync () {
    yield* takeEvery('INCREMENT_ASYNC', incrementAsync);
}