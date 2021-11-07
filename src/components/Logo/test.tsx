import { render, screen } from 'utils/test-utils';
import { v4 } from 'uuid';

import Logo from '.';

describe('<Logo />', () => {
  it('should render a white label by default color', () => {
    // renderizar o componente -> render
    // selecionar o elemento a ser testado -> screen (queries) - getByLabel...
    // comparação - expectativa - análise - assertion - asserção -> expect
    render(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a black label by default color', () => {
    render(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a bigger logo', () => {
    render(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should render a normal logo when size is default', () => {
    render(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });

  it('should render a bigger logo without text on mobile', () => {
    render(<Logo hideOnMobile />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      { media: '(max-width: 768px)' },
    );
  });

  it('should render the logo with id passed', () => {
    const id = v4();
    const { container } = render(<Logo id={id} />);

    expect(container.querySelector(`#paint_linear_${id}`)).toBeInTheDocument();
  });
});
