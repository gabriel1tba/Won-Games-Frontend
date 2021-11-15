import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/client';

const protectedRoutes = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if (!session) {
    context.res.writeHead(302, {
      Location: `/sign-in?callbackUrl=${context.resolvedUrl}`,
    });
    context.res.end();
  }

  return session;
};

export default protectedRoutes;
