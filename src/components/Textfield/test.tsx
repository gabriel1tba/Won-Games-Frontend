import { render, screen } from '@testing-library/react';

import Textfield from '.';

describe('<Textfield />', () => {
  it('should render the heading', () => {
    render(<Textfield />);

    expect(
      screen.getByRole('heading', { name: /Textfield/i }),
    ).toBeInTheDocument();
  });
});
