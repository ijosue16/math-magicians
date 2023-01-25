import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NavBar from './Navbar';

afterEach(cleanup);

describe('render home page', () => {
  test('to match snapshot', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
