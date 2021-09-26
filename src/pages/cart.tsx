import CartTemplate, { CartProps } from 'templates/Cart';

import itemsMock from 'components/CartList/mock';
import gamesMock from 'components/GameCardSlider/mock';
import higlightMock from 'components/Highlight/mock';
import cardsMock from 'components/PaymentOptions/mock';

const CartPage = (props: CartProps) => {
  return <CartTemplate {...props} />;
};

export default CartPage;

export const getServerSideProps = async () => {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: higlightMock,
    },
  };
};
