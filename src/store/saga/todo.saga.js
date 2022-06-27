import {
	call,
	put,
	takeLatest
} from 'redux-saga/effects';
import {
	addToDoApi,
	deleteToDoApi,
	getToDosApi,
	updateToDoApi,
} from '../../services/todo/todo.service';
import extraReducer from '../reducers/extra.reducer';
import todoReducer from '../reducers/todo.reducer';

const {
	      getToDosStart,
	      getToDos,
	      addToDoStart,
	      addToDo,
	      updateToDoStart,
	      updateToDo,
	      deleteToDoStart,
	      deleteToDo
      } = todoReducer;

const {
	      setLoading,
	      setError
      } = extraReducer;

const createWorker = (reduxAction, api) => function* (action) {
	try {
		yield put(setLoading(true));
		const result = yield call(api, ...action.payload);
		yield put(reduxAction(result));
	} catch (error) {
		yield put(setError(error.message));
	} finally {
		yield put(setLoading(false));
	}
};

const getToDosWorker = createWorker(getToDos, getToDosApi);
const addToDoWorker = createWorker(addToDo, addToDoApi);
const updateToDoWorker = createWorker(updateToDo, updateToDoApi);
const deleteToDoWorker = createWorker(deleteToDo, deleteToDoApi);

function* getToDosSaga() {
	yield takeLatest(getToDosStart.toString(), getToDosWorker);
}

function* addToDoSaga() {
	yield takeLatest(addToDoStart.toString(), addToDoWorker);
}

function* updateToDoSaga() {
	yield takeLatest(updateToDoStart.toString(), updateToDoWorker);
}

function* deleteToDoSaga() {
	yield takeLatest(deleteToDoStart.toString(), deleteToDoWorker);
}

const todoSaga = [
	getToDosSaga,
	addToDoSaga,
	updateToDoSaga,
	deleteToDoSaga,
];

export default todoSaga;
