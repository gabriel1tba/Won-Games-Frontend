import { render, screen } from 'utils/test-utils';

import ProfileMenu from '.';

import theme from 'styles/theme';

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    const { container } = render(<ProfileMenu />);

    expect(
      screen.getByRole('link', { name: /my profile/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /my orders/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /sign out/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/orders" />);

    expect(screen.getByRole('link', { name: /my orders/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white,
    });
  });
});
