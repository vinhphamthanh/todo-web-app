import { createSlice, createAction } from '@reduxjs/toolkit';

const loading = createAction('setLoading');
const error = createAction('setError');

export const extraActions = {
	setLoading: loading(),
	setError: error(),
};

const extraSlice = createSlice({
	name: 'extra',
	initialState: {
		loading: false,
		error: null,
	},
	reducers: {
		[extraActions.setLoading.type]: (state, action) => {
			state.loading = action.payload;
		},
		[extraActions.setError.type]: (state, action) => {
			state.error = action.payload;
		}
	}
});

export const {
	             setLoading,
	             setError
             } = extraSlice.actions;
export const extraSelect = state => state.extra;
export const extraReducer = extraSlice.reducer;
