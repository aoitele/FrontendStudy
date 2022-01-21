import Head from 'next/head';
import style from './headernav.module.scss';
import React from 'react';
import LoginModal from '../../../modal/LoginModal';
import MenuModal from '../../../modal/MenuModal';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthUserContext } from '../../../userprovider/AuthUser';

const HeaderNav = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const authUser = useContext(AuthUserContext);
  const [err, setErr] = useState('');

  const showLoginModalClick = () => {
    showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
    //errメッセージのリセット
    setErr('');
  };

  const showLoginIcon = () => {
    if (authUser.userInfo === null) {
      return (
        <a onClick={showLoginModalClick}>
          <i className={'commonIcon iconSmp_login'}></i>
        </a>
      );
    }
  };

  const showMenuModalClick = () => {
    showMenuModal ? setShowMenuModal(false) : setShowMenuModal(true);
  };

  return (
    <div className={style.wrapper}>
      <LoginModal
        showLoginModal={showLoginModal}
        showLoginModalClick={showLoginModalClick}
        setErr={setErr}
        err={err}
      />

      <ul>
        <li>
          <a href='https://oceans-nadia.com/search'>
            <i className={'commonIcon iconSmp_search'}></i>
          </a>
        </li>
        <li>
          <a href='https://oceans-nadia.com/ranking'>
            <i className={'commonIcon iconSmp_ranking'}></i>
          </a>
        </li>
        <li>{showLoginIcon()}</li>
        <li>
          <a href='#'>
            <i
              className={'commonIcon iconSmp_menu'}
              onClick={showMenuModalClick}
            ></i>
          </a>
        </li>
        <MenuModal
          authUser={authUser}
          showMenuModal={showMenuModal}
          showMenuModalClick={showMenuModalClick}
          showLoginModalClick={showLoginModalClick}
        ></MenuModal>
      </ul>
    </div>
  );
};
export default HeaderNav;
