import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Loading } from './components/loading'
import { ErrorModal } from './components/errorModal';
import AppStore from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
	  <Provider store={AppStore.store}>
		  <PersistGate loading={null} persistor={AppStore.persistor}>
        <App />
			  <Loading />
			  <ErrorModal />
		  </PersistGate>
	  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
