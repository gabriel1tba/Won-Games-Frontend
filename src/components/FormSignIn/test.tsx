import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    // verifique email
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();

    // verifique password
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

    // verifique button
    expect(
      screen.getByRole('button', { name: /Sign in now/i }),
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />);

    // link
    expect(
      screen.getByRole('link', { name: /Forgot your password?/i }),
    ).toBeInTheDocument();
  });

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />);

    // text
    expect(screen.getByText(/Don’t have an account?/i)).toBeInTheDocument();

    // link
    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument();
  });
});
