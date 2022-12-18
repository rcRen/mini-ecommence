import '../styles/globals.css';

function Root({ Component, pageProps, query }) {
  return <Component {...pageProps} query={query} />;
}

Root.getInitialProps = async ({ router }) => {
  const { query } = router;
  return { query };
};

export default Root;
