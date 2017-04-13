import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

// Snapshot testing
test('AppTest', () => {
  const component = renderer.create(
    <App />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
