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
			type: todoActions.setToDos.type,
			payload: todos
		});
	} catch (error) {
		yield put({
			type: setError.type,
			payload: error.message
		});
	}
}

function* saga() {
	yield takeLatest(todoActions.fetchToDos.type, setToDosWorker);
}

export default saga;
