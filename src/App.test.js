import { render, screen } from '@testing-library/react';
import App from './App';

test('shows my name on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Kyrian Ogbudimkpa/i);
  expect(nameElement).toBeInTheDocument();
});
