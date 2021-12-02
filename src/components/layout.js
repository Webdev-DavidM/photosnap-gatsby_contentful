import React from 'react';
import Header from './layout/Header';
import Footer from './layout/footer';
import '../scss/modal.scss';

export default function Layout({ children }) {
  const [grey, setGrey] = React.useState(false);
  return (
    <>
      <div className='modal'>
        {grey ? <div className='modal__greyed_out'></div> : null}
        <Header setGrey={setGrey} />
        {children}
        <Footer />
      </div>
    </>
  );
}
