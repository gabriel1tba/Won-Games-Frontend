import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckBoxType } from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta;

export const Default: Story<CheckBoxType> = (args) => <Checkbox {...args} />;
