import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Add from '../../components/Add'; // Import the Add component


  test('renders the sum of a and b using getByTestId', () => {
    render(<Add a={5} b={10} />);
    const sumElement = screen.getByTestId('sum-header'); // Get element by data-testid
    expect(sumElement).toHaveTextContent('15'); // Assert it shows the correct sum
  });

  describe('Add Component', () => {
  test.each([
    [5, 10, 15],  // [a, b, expectedSum]
    [2, 3, 5],    
    [0, 0, 0],    
    [-1, 1, 0],   
    [100, 200, 300]
  ])('renders the correct sum for a: %i, b: %i', (a, b, expectedSum) => {
    render(<Add a={a} b={b} />);
    const sumElement = screen.getByTestId('sum-header'); // Get element by data-testid
    expect(sumElement).toHaveTextContent(expectedSum); // Assert it shows the correct sum
    expect(sumElement).toBeInTheDocument();
  });
});