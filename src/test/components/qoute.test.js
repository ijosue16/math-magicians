import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Qoute from '../../qoute/qoute';

afterEach(cleanup);

describe('test for rendering quote page', () => {
  test('renders Quote component', () => {
    render(<Qoute />);
    expect(screen.getByText(/william/i)).toBeInTheDocument();
  });
});
