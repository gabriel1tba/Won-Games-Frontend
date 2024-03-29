import { Story, Meta } from '@storybook/react/types-6-0';
import GameCard, { GameCardProps } from '.';

import { CartContextProps } from 'context/Cart';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 215,
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const IsInCart: Story<GameCardProps & CartContextProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true,
};
