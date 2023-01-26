import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../home/home';

describe('render home page', () => {
  test('to match snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
