import { fork } from 'redux-saga/effects'
import { addUserFlow} from './sagas'
import { watchAndLog} from './sagas'

export default function* rootSaga() {
    yield fork(addUserFlow)
    yield fork(watchAndLog)
}