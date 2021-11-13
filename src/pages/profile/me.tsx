import { GetServerSidePropsContext } from 'next';
import FormProfile from 'components/FormProfile';
import Profile from 'templates/Profile';
import protectedRoutes from 'utils/protected-routes';

const Me = () => {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  );
};

export default Me;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);

  return {
    props: {
      session,
    },
  };
};
