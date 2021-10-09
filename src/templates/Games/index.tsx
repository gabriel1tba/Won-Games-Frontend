import Base from 'templates/Base';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard from 'components/GameCard';
import Grid from 'components/Grid';

import * as S from './styles';

import { useQueryGames } from 'graphql/queries/games';

import Loader from 'components/Loader';

export type GamesTemplateProps = {
  filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 9 },
  });

  const handleFilter = () => {
    return;
  };

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 9, start: data?.games.length } });
  };

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <div style={{ marginLeft: '30%' }}>
            <Loader />
          </div>
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  title={game.name}
                  slug={game.slug}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover!.url}`}
                  price={game.price}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  );
};

export default GamesTemplate;
