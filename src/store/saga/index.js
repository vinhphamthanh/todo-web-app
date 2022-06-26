import { fork } from 'redux-saga/effects';
import todoSaga from './todo.saga';

export default function* rootSaga() {
	yield fork(todoSaga[0]);
	yield fork(todoSaga[1]);
	yield fork(todoSaga[2]);
	yield fork(todoSaga[3]);
}
