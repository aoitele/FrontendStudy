import React from 'react';
import Header from './Header';
import Footer from './Footer';
import style from '../styles/scss/foundation/layout.module.scss';

type Props = {
  children?: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div className={style.container}>{children}</div>
      <Footer></Footer>
    </div>
  );
};
export default Layout;
