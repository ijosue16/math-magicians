import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('render home page', () => {
  test('to match snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});