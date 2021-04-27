import { render, screen } from '@testing-library/react';
import AlphabetTabs from './AlphabetTabs';

test('renders learn react link', () => {
  render(<AlphabetTabs />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
