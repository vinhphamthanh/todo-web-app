import { createSlice } from '@reduxjs/toolkit';

const extraSlice = createSlice({
	name: 'extra',
	initialState: {
		loading: false,
		error: null,
	},
	reducers: {
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setError(state, action) {
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
