import { createAction, createReducer } from '@reduxjs/toolkit';

const setLoading = createAction('extra/setLoading')
const setError = createAction('extra/setError')

const initialState = {
	loading: false,
	error: null,
};

const reducer = createReducer(initialState, (builder) => {
	builder
	.addCase(setLoading, (state, action) => {
		state.loading = action.payload;
	})
	.addCase(setError, (state, action) => {
		state.error = action.payload;
	})
});

export const extraSelect = state => state.extra;

export default Object.create({
	setError,
	setLoading,
	reducer,
})
