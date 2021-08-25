import 'match-media-mock';
import { fireEvent, screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Gallery from '.';

import items from './mock';

describe('<Gallery />', () => {
  it('should render thumbnails as button', () => {
    renderWithTheme(<Gallery items={items.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery image 1/i }),
    ).toHaveAttribute('src', items[0].src);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery image 2/i }),
    ).toHaveAttribute('src', items[1].src);
  });

  it('should handle open modal ', () => {
    renderWithTheme(<Gallery items={items.slice(0, 2)} />);

    // Selecionar o MenuFull
    const modal = screen.getByLabelText('modal');

    // Verificar se o modal esta fechado
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    // Clicar para abrir e verificar o modal foi aberto
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery image 1/i }),
    );

    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={items.slice(0, 2)} />);

    // Selecionar o MenuFull
    const modal = screen.getByLabelText('modal');

    // Clicar para abrir e verificar o modal foi aberto
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery image 1/i }),
    );

    // Clicar para fechar e verificar o modal foi fechado
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });
  });

  it('should handle close modal on key press', () => {
    const { container } = renderWithTheme(
      <Gallery items={items.slice(0, 2)} />,
    );

    // Selecionar o MenuFull
    const modal = screen.getByLabelText('modal');

    // Clicar para abrir e verificar o modal foi aberto
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery image 1/i }),
    );

    // Clicar para fechar e verificar o modal foi fechado
    fireEvent.keyUp(container, { key: 'Escape' });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });
  });
});
