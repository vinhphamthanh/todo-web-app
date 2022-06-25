import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todo: { title: '' },
	todos: []
};

const todo = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		getToDo(state, action) {
			state.todos = action.payload;
		},
		addToDo(state, action) {
			state.todo = action.payload;
		},
		updateToDo(state, action) {
			state.todo = action.payload;
		},
		deleteToDo(state, action) {
			state.todo = action.payload;
		}
	}
});

export const {
	             getToDo,
	             addToDo,
	             updateToDo,
	             deleteToDo
             } = todo.actions;
export default todo.reducer;
