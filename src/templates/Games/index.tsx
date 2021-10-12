import { ParsedUrlQueryInput } from 'querystring';
import { useRouter } from 'next/router';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

import { useQueryGames } from 'graphql/queries/games';
import {
  parseQueryStringToFilter,
  parseQueryStringToWhere,
} from 'utils/filter';

import Base from 'templates/Base';
import Grid from 'components/Grid';

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar';
import GameCard from 'components/GameCard';
import Empty from 'components/Empty';

import * as S from './styles';

export type GamesTemplateProps = {
  filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter();

  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 9,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null,
    },
  });

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items,
    });
    return;
  };

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 9, start: data?.games.length } });
  };

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems,
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            {data?.games.length ? (
              <>
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
              </>
            ) : (
              <Empty
                title=":("
                description="We didn't find any games with this filter"
                hasLink
              />
            )}
          </section>
        )}
      </S.Main>
    </Base>
  );
};

export default GamesTemplate;
