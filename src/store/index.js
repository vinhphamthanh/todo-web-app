import {
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import AppSlices from './reducers/index';

const { TodoSlice, ExtraSlice } = AppSlices;

const rootReducers = combineReducers({
	todo: TodoSlice.default,
	extra: ExtraSlice.default,
})

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducers,
	// middleware: sagaMiddleware,
});

// sagaMiddleware.run();

export default store;
