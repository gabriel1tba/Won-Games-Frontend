import { GetServerSidePropsContext } from 'next';

import OrdersList, { OrdersListProps } from 'components/OrdersList';
import Profile from 'templates/Profile';

import ordersMock from 'components/OrdersList/mock';

import protectedRoutes from 'utils/protected-routes';

const Orders = ({ items }: OrdersListProps) => {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
};

export default Orders;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);
  return {
    props: {
      session,
      items: ordersMock,
    },
  };
};
