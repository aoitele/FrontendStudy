import React,{ createContext, useState, useEffect } from "react";
import {LoginedUserData} from '../../＠types/basicdata';
import { tokenInspection } from '../../modules/tokenInspection';



interface AuthStateContext{
    userInfo: LoginedUserData | null | undefined;
}
type authDispatchStateContext= React.Dispatch<React.SetStateAction<AuthState>> | undefined

export interface AuthState {
    userInfo: LoginedUserData | null | undefined;
}

//typescriptは必ず初期値を設定する必要がある
export const AuthUserContext= createContext<AuthStateContext>({
    userInfo: undefined
})

export const  AuthDispatchContext= createContext<authDispatchStateContext>(undefined
)


const initialValue:AuthState = {
    userInfo: undefined
}

const AuthUser:React.FC=(props)=>{
     const [userInfo, setUserInfo]= useState<AuthState>(initialValue);
     
     useEffect(()=>{
        if(typeof(userInfo.userInfo) == "undefined"){
        tokenInspection().then(
          value=>setUserInfo({userInfo: value}) 
        )
        }
      },[])
return(
    <AuthDispatchContext.Provider value={setUserInfo}>
        <AuthUserContext.Provider value={userInfo}>
            {props.children}
        </AuthUserContext.Provider>
    </AuthDispatchContext.Provider>
)

}


export default AuthUser;