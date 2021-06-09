import { addDecorator } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';
import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global';

addDecorator(withNextRouter());

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
