import Head from 'next/head';
import style from './headernav.module.scss';


const HeaderNav = () => {
  return (
    
    <div className={style.wrapper}>
     <ul>
     <li>
       <a href="https://oceans-nadia.com/search">
         <i className={'commonIcon iconSmp_search'}></i>
       </a>
     </li>
     <li>
       <a href="https://oceans-nadia.com/ranking">
         <i className={'commonIcon iconSmp_ranking'}></i>
       </a>
       </li>
     <li>
       <a href="#">
         <i className={'commonIcon iconSmp_login'}></i>
       </a>
     </li>
     <li>
       <a href="#">
         <i className={'commonIcon iconSmp_menu'}></i>
       </a>
     </li>
    
     
     </ul>
    </div>
   
  );
};
export default HeaderNav;
