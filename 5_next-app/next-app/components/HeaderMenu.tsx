import styles from '../styles/scss/foundation/header.module.scss';

const HeaderMenu = () => {
  return (
    <div className={styles.header__menu}>
      <ul className={styles.header__menu_main_list}>
        <li>
          <a href='https://oceans-nadia.com/special_sites/join_nadia_artist'>
            <i
              className={`${styles.icon_artist_request02} iconArtistRequest02 commonIcon`}
            ></i>
            <span className={styles.header__menu_text}>Artist申請</span>
          </a>
        </li>
        <li>
          <a href='' id='js-gnavi-login'>
            <i className={`${styles.icon_login02} iconLogin02 commonIcon`}></i>
            <span className={styles.header__menu_text}>ログイン</span>
          </a>
        </li>
        <li>
          <a href='https://oceans-nadia.com/register/normal?redirect=%2F'>
            <i className={`${styles.icon_signup} iconSignup commonIcon`}></i>
            <span className={styles.header__menu_text}>無料会員登録</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
