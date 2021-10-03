import { gql, useQuery } from '@apollo/client';
import Home, { HomeTemplateProps } from 'templates/Home';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import Logo from 'components/Logo';

const Index = (props: HomeTemplateProps) => {
  const { data, loading, error } = useQuery(gql`
    query getGames {
      games {
        name
      }
    }
  `);

  if (loading) return <Logo />;

  if (error) return <p>{error}</p>;

  if (data) return <p>{JSON.stringify(data, null, 2)}</p>;

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
