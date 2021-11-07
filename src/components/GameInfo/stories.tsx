import { Story, Meta } from '@storybook/react/types-6-0';
import GameInfo, { GameInfoProps } from '.';

import { CartContextProps } from 'context/Cart';

import mock from './mock';

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: mock,
} as Meta;

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
);

export const IsInCart: Story<GameInfoProps & CartContextProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true,
};
