import { Story, Meta } from '@storybook/react/types-6-0';
import GameInfo, { GameInfoProps } from '.';
import mock from './mock';

export default {
  title: 'GameInfo',
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
