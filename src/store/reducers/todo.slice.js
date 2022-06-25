import {
	createAction,
	createSlice
} from '@reduxjs/toolkit';

const fetch = createAction('fetchToDos');
const set = createAction('setToDos');
const add = createAction('addToDo');
const update = createAction('updateToDos');

export const todoActions = {
	fetchToDos: fetch(),
	setToDos: set(),
	addToDo: add(),
	updateToDos: update(),
};

const todo = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {
		[todoActions.setToDos.type]: (state, action) => {
			console.log('')
			console.log('[LOGGING----------------------LOGGING]')
			console.log('[LOGGING]:::x:::slice:::action --> ', action)
			state.todos = action.payload;
		},
		[todoActions.addToDo.type]: (state, action) => {
			console.log('')
			console.log('[LOGGING----------------------LOGGING]')
			console.log('[LOGGING]:::x:::addTodo:::action --> ', action)
			state.todos = [action.payload, ...state.todos];
		},
		[todoActions.updateToDos.type]: (state, action) => {
			state.todos = action.payload;
		},
		deleteToDo(state, action) {
			state.todo = action.payload;
		}
	}
});

export const {
	             setToDos,
	             addToDo,
	             updateToDos,
	             // deleteToDos,
             } = todo.actions;
export const todosSelect = state => state.todos;
export const todosReducer = todo.reducer;

