import { fireEvent, screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });

  it('should handle the open/close menu', () => {
    renderWithTheme(<Menu />);

    // Selecionar o MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    // Verificar se o menu esta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    // Clicar para abrir e verificar se foi aberto
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    // Clicar para fechar e verificar se fechou
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();

    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
  });

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="Gabriel" />);

    expect(screen.getByText(/my account/i)).toBeInTheDocument();
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument();

    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });
});
