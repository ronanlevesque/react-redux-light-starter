import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

// Snapshot testing
it('renders a snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
