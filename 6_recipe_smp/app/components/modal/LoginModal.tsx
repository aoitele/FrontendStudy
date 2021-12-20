import style from '../modal/loginmodal.module.scss'
import { AxiosClient } from '../../modules/request';
import {useState} from "react"
import {AuthState} from "../userprovider/AuthUser";
import {  setCookie } from 'nookies';

type Props={
    showLoginModal: boolean;
    showLoginModalClick: ()=>void;
    setUserInfo: React.Dispatch<React.SetStateAction<AuthState>>
    err: string;
    setErr: React.Dispatch<React.SetStateAction<string>>;
    
}


const LoginModal: React.FC<Props>= ({showLoginModal ,setUserInfo, showLoginModalClick, err ,setErr}) =>{
    const [info, setInfo]=useState({email: "", password:""})
 
  

  const ChangeInfo=(e)=>{
      const value= e.target.value
      const name= e.target.name
     setInfo({...info, [name]: value})
     console.log(info)
  }
  const Post= async ()=>{
      try{
        const axios = AxiosClient();
        const res = await axios.post('login', {params: info});
        const loginUserData= res.data.data[0]

        if(loginUserData){ 
          setUserInfo({userInfo: loginUserData});
          showLoginModalClick()
          const options= {
            //30日間保存 
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          }
          setCookie(null, 'cookie', loginUserData.p_token, options);
          

        }else{
            setErr(res.data.errmessage); 
          }
        }
        
      catch (err) {
        const errorCode = typeof err.response === "undefined"?  500: err.response.status;
  
      }
    }

   
return(
    showLoginModal ? (
        <div className={style.overlay}>
            <div className={style.wrapper}>
                <div className={style.title}>
                <i className={"commonIcon iconLoginSingle"}></i>
                <p>ログイン</p>
                </div>
                
                <form onChange={ChangeInfo} >
                    <div className={style.input_info}>
                    <p>メールアドレスを入力</p>
                    <input type="email" name="email"></input> 
                    </div>
                    <div className={style.input_info}>
                    <p>パスワードを入力</p>
                    <input type="password" name="password"></input> 
                    </div>
                </form>
                <p className={style.err}>{err}</p>
                <button  onClick={Post} className={style.loginButton}>ログイン</button>
        
                <button onClick={showLoginModalClick}> ✖ 閉じる</button>
            </div>
    </div>
  
  ):(<div></div>)
    
)
}

export default LoginModal