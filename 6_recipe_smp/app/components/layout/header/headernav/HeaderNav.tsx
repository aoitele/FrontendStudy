import Head from 'next/head';
import style from './headernav.module.scss';


const HeaderNav = () => {
  return (
    
    <div className={style.wrapper}>
     <ul>
     <li>
       <a href="https://oceans-nadia.com/search">
         <i className={'commonIcon icon-ranking'}></i>
       </a>
     </li>
     <li>
       <a href="https://oceans-nadia.com/ranking">
         <i className={'commonIcon icon-ranking'}></i>
       </a>
       </li>
     <li>
       <a href="#">
         <i className={'commonIcon icon-login'}></i>
       </a>
     </li>
     <li>
       <a href="#">
         <i className={'commonIcon icon-menu'}></i>
       </a>
     </li>
    
     
     </ul>
    </div>
   
  );
};
export default HeaderNav;
