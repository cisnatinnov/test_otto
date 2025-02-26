import { render, screen } from '@testing-library/react';
import GreetingCardForm from './components/GreetingCardForm';

test('renders learn react link', () => {
  render(<GreetingCardForm />);
  const submitButton = screen.getByText(/Generate Card/i);
  expect(submitButton).toBeInTheDocument();
});
