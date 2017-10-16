import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const enhancer = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, enhancer);

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers').default; // eslint-disable-line
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
