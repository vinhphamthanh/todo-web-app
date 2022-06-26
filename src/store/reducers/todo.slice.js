import {
	createAction,
	createSlice
} from '@reduxjs/toolkit';
import {
	sortByCompleted,
	sortByDate
} from '../../utils/sorting';

const fetch = createAction('fetchToDos');
const set = createAction('setToDos');
const add = createAction('addToDo');
const update = createAction('updateToDo');
const del = createAction('deleteToDo');

export const todoActions = {
	fetchToDos: fetch,
	setToDos: set,
	addToDo: add,
	updateToDo: update,
	deleteToDo: del,
};

const todo = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {
		[todoActions.setToDos().type]: (state, action) => {
			state.todos = action.payload;
		},
		[todoActions.addToDo().type]: (state, action) => {
			state.todos = [action.payload, ...state.todos];
		},
		[todoActions.updateToDo().type]: (state, action) => {
			state.todos = state.todos.map(item => {
				if (item.id === action.payload.id) {
					return action.payload;
				}

				return item;
			}).sort(sortByDate).sort(sortByCompleted);
		},
		[todoActions.deleteToDo().type]: (state, action) => {
			state.todos =
				state.todos.filter(item => item.id !== action.payload).sort(sortByDate).sort(sortByCompleted);
		}
	}
});

export const todosSelect = state => state.todos;
export const todosReducer = todo.reducer;

