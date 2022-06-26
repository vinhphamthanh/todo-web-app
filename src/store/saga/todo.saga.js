import {
	call,
	put,
	takeLatest
} from 'redux-saga/effects';
import { TODO_URL } from '../../constants/endpoints';
import {
	addToDoApi,
	deleteToDoApi,
	fetchToDosApi,
	updateToDoApi,
} from '../../services/todo/todo.service';
import {
	sortByCompleted,
	sortByDate
} from '../../utils/sorting';
import AppSlices from '../reducers';

const {
	      ToDoSlice: { todoActions },
	      ExtraSlice: {
		      setLoading,
		      setError,
	      },
      } = AppSlices;

function* setToDosWorker() {
	try {
		yield put({ type: setLoading.type, payload: true });
		const todos = yield call(fetchToDosApi, TODO_URL);
		yield put({
			type: `todos/${todoActions.setToDos().type}`, // Add reducers name for action
			payload: todos.sort(sortByDate).sort(sortByCompleted)
		});
	} catch (error) {
		yield put({ type: setError.type, payload: error.message });
	} finally {
		yield put({ type: setLoading.type, payload: false });
	}
}

function* addToDoWorker(action) {
	try {
		yield put({ type: setLoading.type, payload: true });

		const todo = yield call(addToDoApi, TODO_URL, action.payload);
		yield put({
			type: `todos/${todoActions.addToDo().type}`, // Add reducers name for action
			payload: todo,
		});
	} catch (error) {
		yield put({ type: setError.type, payload: error.message });
	} finally {
		yield put({ type: setLoading.type, payload: false });
	}
}

function* updateToDoWorker(action) {
	try {
		yield put({ type: setLoading.type, payload: true });

		const { id } = action.payload;
		const todo = yield call(updateToDoApi, `${TODO_URL}/${id}`, action.payload);
		yield put({
			type: `todos/${todoActions.updateToDo().type}`, // Add reducers name for action
			payload: todo,
		});
	} catch (error) {
		yield put({ type: setError.type, payload: error.message });
	} finally {
		yield put({ type: setLoading.type, payload: false });
	}
}

function* deleteToDoWorker(action) {
	try {
		yield put({ type: setLoading.type, payload: true });

		yield call(deleteToDoApi, `${TODO_URL}/${action.payload}`);
		yield put({
			type: `todos/${todoActions.deleteToDo().type}`, // Add reducers name for action
			payload: action.payload,
		});
	} catch (error) {
		yield put({ type: setError.type, payload: error.message });
	} finally {
		yield put({ type: setLoading.type, payload: false });
	}
}

function* fetchToDosSaga() {
	yield takeLatest(todoActions.fetchToDos().type, setToDosWorker);
}

function* addToDoSaga() {
	yield takeLatest(todoActions.addToDo().type, addToDoWorker);
}

function* updateToDoSaga() {
	yield takeLatest(todoActions.updateToDo().type, updateToDoWorker);
}

function* deleteToDoSaga() {
	yield takeLatest(todoActions.deleteToDo().type, deleteToDoWorker);
}

const todoSaga = [
	fetchToDosSaga,
	addToDoSaga,
	updateToDoSaga,
	deleteToDoSaga,
];

export default todoSaga;
