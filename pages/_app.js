import '../styles/globals.css';

import Layout from '../components/layout';
import {CartProvider} from '../contexts/cart'

function Root({ Component, pageProps, query }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} query={query} />
      </Layout>
    </CartProvider>
  );
}

Root.getInitialProps = async ({ router }) => {
  const { query } = router;
  return { query };
};

export default Root;
