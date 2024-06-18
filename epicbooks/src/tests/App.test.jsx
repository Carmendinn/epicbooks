// tests per componente Welcome.test.jsx
import { render, screen } from '@testing-library/react';
import Welcome from '../src/components/Welcome';
import App from '../src/components/App';
// src/setupTests.js
import "@testing-library/jest-dom";
import { expect } from 'vitest';

test('renders Welcome component correctly', () => {
    render(<Welcome />);
    const welcomeElement = screen.getByText(/Epic Books/i);
    expect(welcomeElement).toBeInTheDocument();
});

//test render numero card esatto

test('verifico il render di tutte le card', async () => {
    render(<App />)

    const cards = await screen.findAllByTestId('card');

    expect(cards).toHaveLenght(150); 
});
