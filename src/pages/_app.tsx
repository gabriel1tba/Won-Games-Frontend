import NextNprogress from 'nextjs-progressbar';
import Head from 'next/head';
import { AppProps } from 'next/app';
import AppProvider from 'context';
import { Provider as AuthProvider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

import { useApollo } from 'utils/apollo';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApoloState);

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <Head>
              <title>Won Games</title>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="theme-color" content="#06092B" />
              <meta
                name="description"
                content="The best Game Store in the world!"
              />
            </Head>
            <DefaultSeo {...SEO} />
            <GlobalStyles />
            <NextNprogress
              color="#F231A5"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
            />
            <Component {...pageProps} />
          </AppProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
