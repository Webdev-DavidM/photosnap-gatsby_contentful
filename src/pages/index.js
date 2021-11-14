import * as React from 'react';
/* Note below css.module file need to be named exports as below to work */
import * as styles from './index.module.scss';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

const IndexPage = () => {
  return (
    <main className={styles.index}>
      <Header />
      <Footer />
    </main>
  );
};

export default IndexPage;
