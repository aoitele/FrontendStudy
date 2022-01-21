import style from './header.module.scss';
import HeaderNav from './headernav/HeaderNav';

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <div className={style.logo}>
          　
          <a href='/'>
            <img
              src='https://asset.oceans-nadia.com/2018/pc/images/nadia-logo.jpg'
              alt='レシピサイト Nadia | ナディア - プロの料理家のおいしいレシピ'
            ></img>
          </a>
        </div>
        <HeaderNav></HeaderNav>
      </div>
    </div>
  );
};
export default Header;
