import React from 'react';
import  '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'jest';
import Greeting from '../../components/Greeting';


test('renders hello message with name', () => {
   render(<Greeting name="John" age={22} />);
    const greetingElement = screen.getByText(/hello, John!22/i);
   expect(greetingElement).toBeInTheDocument(); // Using the matcher here
});

test('renders hello message with name', () => {
   render(<Greeting name="John" age={22} />);
    const greetingElement = screen.getByText(/hello, John!22/i);
   expect(greetingElement).toBeInTheDocument(); // Using the matcher here
});
test('renders hello message with name', () => {
   render(<Greeting name="John" age={22} />);
    const greetingElement = screen.getByText(/hello, John!22/i);
   expect(greetingElement).toBeInTheDocument(); // Using the matcher here
});
