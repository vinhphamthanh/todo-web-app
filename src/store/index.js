import {
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';
import extraReducer from './reducers/extra.reducer';
import todoReducer from './reducers/todo.reducer';
import rootSaga from './saga';

const persistConfig = {
	key: 'root-todos',
	storage,
};

const rootReducers = combineReducers({
	todos: todoReducer.reducer,
	extra: extraReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: {
			ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		}
	}).concat(sagaMiddleware),
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

const AppStore = {
	store,
	persistor
};

export default AppStore;
