import { render, screen } from '@testing-library/react';
import TabButton from './TabButton';

test('renders learn react link', () => {
  render(<TabButton />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
