import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Qoute from '../components/qoute';
import NavBar from '../components/Navbar';

afterEach(cleanup);

describe('test for rendering quote page', () => {
  test('renders Quote component', () => {
    render(<Qoute />);
    expect(screen.getByText(/william/i)).toBeInTheDocument();
  });
});

describe('render home page', () => {
  test('to match snapshot', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
