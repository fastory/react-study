import { fork } from 'redux-saga/effects'
import { addUserFlow} from './sagas'
import { watchAndLog} from './sagas'

export default function* rootSaga() {
    yield fork(addUserFlow) // 非阻塞: 将不会等待 addUserFlow
    yield fork(watchAndLog)
}