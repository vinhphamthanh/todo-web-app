import {
	createAction,
	createReducer
} from '@reduxjs/toolkit';
import {
	sortByCompleted,
	sortByDate
} from '../../utils/sorting';

const getToDosStart = createAction('todos/getToDosStart');
const getToDos = createAction('todos/getToDos');
const addToDoStart = createAction('todos/addToDoStart');
const addToDo = createAction('todos/addToDo');
const updateToDoStart = createAction('todos/updateToDoStart');
const updateToDo = createAction('todos/updateToDo');
const deleteToDoStart = createAction('todos/deleteToDoStart');
const deleteToDo = createAction('todos/deleteToDo');

const initialState = {
	todos: []
};

const sanitizeTodos = todos => todos.sort(sortByDate).sort(sortByCompleted);

const reducer = createReducer(initialState, (builder) => {
	builder
	.addCase(getToDos, (state, action) => {
		state.todos = Array.isArray(action.payload) ?
			sanitizeTodos(action.payload) :
			state;
	})
	.addCase(addToDo, (state, action) => {
		state.todos = [action.payload, ...state.todos];
	})
	.addCase(updateToDo, (state, action) => {
		const { id } = action.payload;
		state.todos = sanitizeTodos(state.todos.map(item => {
			if (item.id === id) {
				return action.payload;
			}

			return item;
		}));
	})
	.addCase(deleteToDo, (state, action) => {
		const { id } = action.payload;
		state.todos = sanitizeTodos(state.todos.filter(item => item.id !== id));
	});
});

export const todosSelect = state => state.todos;

export default Object.create({
	getToDosStart,
	getToDos,
	addToDoStart,
	addToDo,
	updateToDoStart,
	updateToDo,
	deleteToDoStart,
	deleteToDo,
	reducer,
});
