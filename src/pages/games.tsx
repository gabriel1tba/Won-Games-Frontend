import GamesTemplate, { GamesTemplateProps } from 'templates/Games';
import filterItemsMock from 'components/ExploreSidebar/mock';
import gamesMock from 'components/GameCardSlider/mock';

const Games = (props: GamesTemplateProps) => {
  return <GamesTemplate {...props} />;
};

export default Games;

export const getServerSideProps = () => {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock,
    },
  };
};
