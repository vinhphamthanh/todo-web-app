import { createReducer } from '@reduxjs/toolkit';
import { createActionList } from './helpers';

const actions = ['setLoading', 'setError'];

const extraActions = createActionList(actions);

console.log('extraActions', extraActions);

const {
	      setLoading,
	      setError
      } = extraActions;

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
	});
});

export const extraSelect = state => state.extra;

export default Object.create({
	extraActions,
	reducer,
});
