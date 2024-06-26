import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import store from './redux/store';
// import i18n from './i18n';
import './i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <I18nextProvider i18n={i18n}> */}
      <GlobalStyles>
        <App />
      </GlobalStyles>
      {/* </I18nextProvider> */}
    </React.StrictMode>
    ,
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
