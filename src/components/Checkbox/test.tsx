import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    // Pegando input a partir do papel/role
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    // Pegando input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    // pegando label a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should render without label', () => {
    renderWithTheme(<Checkbox labelFor="check" />);

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument();
  });

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />,
    );

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517',
    });
  });

  it('should dispatch onCheck status changes', () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox label="checkbox" labelFor="check" onCheck={onCheck} />,
    );

    expect(onCheck).not.toHaveBeenCalled();
  });
});
