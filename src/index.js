import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store/configureStore';
import App from './components/App/App';
import './styles/global.css';

const renderApp = Component =>
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NewApp = require('./components/App/App').default; //eslint-disable-line
    renderApp(NewApp);
  });
}
