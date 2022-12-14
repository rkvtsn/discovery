import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from 'theming';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './Theme';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
