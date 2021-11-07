import { render, screen } from 'utils/test-utils';

import Highlight from '.';
import * as S from './styles';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg',
};

describe('<Highlight />', () => {
  it('should render the heading', () => {
    render(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /Heading 1/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Heading 2/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument();
  });

  it('should render the background image', () => {
    const { container } = render(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });

  it('should render the float image', () => {
    render(<Highlight floatImage="/float-image.png" {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png',
    );
  });

  it('should render the align right by default', () => {
    const { container } = render(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`,
    });
  });

  it('should render the align left', () => {
    const { container } = render(<Highlight alignmente="left" {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'",
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`,
    });
  });
});
