import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

import Home, { HomeTemplateProps } from 'templates/Home';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const Index = (props: HomeTemplateProps) => {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  client.query({
    query: gql`
      query getGames {
        games {
          name
        }
      }
    `,
  });

  return <Home {...props} />;
};

export default Index;

export const getStaticProps = () => {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock,
    },
  };
};
