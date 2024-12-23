import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { WhyUsProvider } from './contexts/whyus.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    < WhyUsProvider>
      <App />
    </WhyUsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
