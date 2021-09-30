import OrdersList, { OrdersListProps } from 'components/OrdersList';
import Profile from 'templates/Profile';

import ordersMock from 'components/OrdersList/mock';

const Orders = ({ items }: OrdersListProps) => {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
};

export default Orders;

export const getServerSideProps = () => {
  return {
    props: {
      items: ordersMock,
    },
  };
};
