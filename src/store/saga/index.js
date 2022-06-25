import { fork } from 'redux-saga/effects';
import todoSaga from './todo.saga';

export default function* rootSaga() {
	yield fork(todoSaga);
}
