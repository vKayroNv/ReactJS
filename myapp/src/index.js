import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

import { store, persistor }from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/pages/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor} loading={<Loading />}>
      <App />
    </PersistGate> */}
    <App />
  </Provider>
);