import {
	call,
	put,
	takeLatest
} from 'redux-saga/effects';
import { TODO_URL } from '../../constants/endpoints';
import { fetchToDosApi } from '../../services/todo/todo.service';
import AppSlices from '../reducers';

const {
	      ToDoSlice: { todoActions },
	      ExtraSlice: { setError },
      } = AppSlices;

function* setToDosWorker() {
	try {
		const todos = yield call(fetchToDosApi, TODO_URL);
		yield put({
			type: `todos/${todoActions.setToDos.type}`, // Needs prefix of reducer name before action type
			payload: todos
		});
	} catch (error) {
		yield put({
			type: setError.type,
			payload: error.message
		});
	}
}

function* todoSaga() {
	yield takeLatest(todoActions.fetchToDos.type, setToDosWorker);
}

export default todoSaga;
