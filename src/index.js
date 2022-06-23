import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './modules/context/auth';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
);
