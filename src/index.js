import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as ReduxProvider } from "react-redux"
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StrictMode>
    <ReduxProvider store={store }>
      <App />
    </ReduxProvider>
  </StrictMode>
);
