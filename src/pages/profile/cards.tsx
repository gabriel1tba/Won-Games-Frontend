import CardsList, { CardsListProps } from 'components/CardsList';
import Profile from 'templates/Profile';

import mockCards from 'components/PaymentOptions/mock';

const ProfileCards = ({ cards }: CardsListProps) => {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
};

export default ProfileCards;

export const getServerSideProps = () => {
  return {
    props: {
      cards: mockCards,
    },
  };
};
