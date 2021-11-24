import { GetServerSidePropsContext } from 'next';

import OrdersList, { OrdersListProps } from 'components/OrdersList';
import Profile from 'templates/Profile';

import { initializeApollo } from 'utils/apollo';
import {
  QueryOrders,
  QueryOrdersVariables,
} from 'graphql/generated/QueryOrders';
import { QUERY_ORDERS } from 'graphql/queries/orders';
import { ordersMapper } from 'utils/mappers';
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
  const apolloClient = initializeApollo(null, session);

  if (!session) {
    return { props: {} };
  }

  const { data } = await apolloClient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id as string,
    },
    fetchPolicy: 'no-cache',
  });

  return {
    props: {
      session,
      items: ordersMapper(data.orders),
    },
  };
};
