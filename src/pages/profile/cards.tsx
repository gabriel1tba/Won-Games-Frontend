import { GetServerSidePropsContext } from 'next';
import CardsList, { CardsListProps } from 'components/CardsList';
import Profile from 'templates/Profile';

import protectedRoutes from 'utils/protected-routes';

import mockCards from 'components/PaymentOptions/mock';

const ProfileCards = ({ cards }: CardsListProps) => {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
};

export default ProfileCards;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);

  return {
    props: {
      session,
      cards: mockCards,
    },
  };
};
