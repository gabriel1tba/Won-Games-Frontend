import { Story, Meta } from '@storybook/react/types-6-0';
import GameDetails from '.';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
} as Meta;

export const Default: Story = () => <GameDetails />;
