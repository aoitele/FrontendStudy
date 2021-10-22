import style from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <div className={style.inner}>
        <ul className={style.list}>
          <li>
            <a href='/terms/faq'>FAQ</a>
          </li>
          <li>
            <a href='/mailmagazine'>メールマガジンバックナンバー</a>
          </li>
          <li>
            <a href='/terms/privacy'>個人情報保護方針</a>
          </li>
          <li>
            <a href='https://nadia-artists.com/client/'>
              取材・レシピ開発のご依頼
            </a>
          </li>
          <li>
            <a href='/contact'>お問い合わせ・広告掲載</a>
          </li>
          <li>
            <a href='https://nadia-corp.co.jp/'>運営会社</a>
          </li>
          <li>
            <a href='/terms/law'>特定商取引法表示</a>
          </li>
          <li>
            <a href='https://nadia-corp.co.jp/careers/'>採用情報</a>
          </li>
        </ul>
      </div>
      <p className={style.footer__copyright}>
        Copyright © 2012 Nadia All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
