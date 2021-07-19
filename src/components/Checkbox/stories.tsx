import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckBoxProps } from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta;

export const Default: Story<CheckBoxProps> = (args) => <Checkbox {...args} />;
