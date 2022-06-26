import {
	all,
	fork
} from 'redux-saga/effects';
import todoSaga from './todo.saga';

export default function* rootSaga() {
	yield all(todoSaga.map(saga => fork(saga)));
}
