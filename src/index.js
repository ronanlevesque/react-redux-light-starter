import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store/configureStore';
import App from './components/App/App';
import './styles/global.css';

render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NewApp = require('./components/App/App').default; //eslint-disable-line
    render(
      <Provider store={store}>
        <AppContainer>
          <NewApp />
        </AppContainer>
      </Provider>,
      document.getElementById('root'),
    );
  });
}
