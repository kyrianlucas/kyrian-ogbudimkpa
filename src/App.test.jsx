import { render, screen } from '@testing-library/react';

import App from './App';



test('renders my name on the page', () => {

  render(<App />);

  expect(screen.getByText('Kyrian Ogbudimkpa')).toBeInTheDocument();

});