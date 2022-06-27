import { createReducer } from '@reduxjs/toolkit';
import {
	sortByCompleted,
	sortByDate
} from '../../utils/sorting';
import { createActionList } from './helpers';

const actions = [
	'getToDos',
	'addToDo',
	'updateToDo',
	'deleteToDo',
];

const todoActions = createActionList(actions);

const {
	      getToDos,
	      addToDo,
	      updateToDo,
	      deleteToDo
      } = todoActions;

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
	todoActions,
	reducer,
});
