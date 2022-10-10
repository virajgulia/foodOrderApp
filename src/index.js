import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from './Appcontext';
import { allfoods } from './Appcontext';
import { store } from './componants/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <AppContext.Provider value={allfoods}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContext.Provider>
  </Provider>
);

reportWebVitals();
