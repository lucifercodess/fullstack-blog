import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from'react-router-dom' 
import './index.css'
import { store,persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wrapped the app with browser router */}
    <BrowserRouter> 
    <PersistGate persistor={persistor}>
    <Provider store={store}>
    <App />
    </Provider>,
    </PersistGate>
    </BrowserRouter>
  </React.StrictMode>,
)
