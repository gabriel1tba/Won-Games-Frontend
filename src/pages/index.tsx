import Home from 'templates/Home';

export default function Index() {
  return <Home />;
}

export function getStaticProps() {
  return {
    props: {
      title: 'Opa',
    },
  };
}
