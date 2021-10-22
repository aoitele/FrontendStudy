import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__logo}>
          　
          <a href='/'>
            <img
              src='https://asset.oceans-nadia.com/2018/pc/images/nadia-logo.jpg'
              width='166'
              alt='レシピサイト Nadia | ナディア - プロの料理家のおいしいレシピ'
            ></img>
          </a>
        </div>      
    </div>
  );
};
export default Header;
