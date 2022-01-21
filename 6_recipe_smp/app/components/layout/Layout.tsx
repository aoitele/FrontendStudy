import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import style from './layout.module.scss';

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
