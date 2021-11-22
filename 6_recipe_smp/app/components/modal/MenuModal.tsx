import id from 'date-fns/esm/locale/id/index.js'
import {LoginedUserData} from '../../＠types/basicdata'
import style from '../modal/menumodal.module.scss'
import {useState} from 'react';

type Props ={
    showMenuModal: boolean;
    LoginedUserData: LoginedUserData;
    showMenuModalClick: ()=>void;
    showLoginModalClick: ()=>void;
}

const MenuModal: React.FC<Props>=({ showMenuModal, LoginedUserData, showMenuModalClick, showLoginModalClick })=>{

    const UserInfo=()=>{
        if(LoginedUserData){
            return(
                <div className={style.user}>
                <img src={LoginedUserData.icon} width={40} height={40}></img>
                <p>{LoginedUserData.user_name}</p>
            </div>
            )
        }else{
            return(
            <div className={style.login}>
                <button onClick={showLoginModalClick}>  ログイン　</button>
            </div>
            )
            
        }
    }

  

    return(
    showMenuModal?(
        <div className={style.overlay} onClick={showMenuModalClick}>
            <div className={style.wrapper}>
                {UserInfo()}
                <div className={style.menu} >
                    <ul>
                        <li>
                        <a href="https://oceans-nadia.com/recipe/tag">
                          <p>カテゴリ検索</p>
                         </a></li>
                        <li>
                        <a href="https://oceans-nadia.com/search?type=Artist">
                          <p>NadiaArtist検索</p>
                         </a></li>
                        <li>
                        <a href="https://oceans-nadia.com/ranking">
                          <p>ランキング</p>
                         </a></li>
                         <li>
                        <a href="https://oceans-nadia.com/cooking_basics">
                          <p>料理の基礎</p>
                        </a></li>
                        <li>
                        <a href="https://oceans-nadia.com/article">
                          <p>Nadiaコラム</p>
                         </a></li>
                         <li>
                        <a href="https://oceans-nadia.com/timeline">
                          <p>タイムライン</p>
                         </a></li>
                
                    </ul>
                </div>
            </div>
        </div>
        
    ):( <div></div> )
   
    )
}

export default MenuModal;