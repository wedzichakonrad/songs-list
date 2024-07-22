import React from 'react';
import ReactDOM from 'react-dom/client';
import MainContainer from './containers/main-container';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>
);
