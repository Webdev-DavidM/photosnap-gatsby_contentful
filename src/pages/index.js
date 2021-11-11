import * as React from 'react';
/* Note below css.module file need to be named exports as below to work */
import * as styles from './index.module.scss';
import Header from '../components/layout/header';

const IndexPage = () => {
  return (
    <main>
      <Header />
    </main>
  );
};

export default IndexPage;
