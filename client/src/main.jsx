import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from'react-router-dom' 
import './index.css'
import { store } from './redux/store.js';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wrapped the app with browser router */}
    <BrowserRouter> 
    <Provider store={store}>
    <App />
    </Provider>,
    </BrowserRouter>
  </React.StrictMode>,
)
