import {useContext} from "react";
import { AuthDispatchContext, AuthUserContext} from "../components/userprovider/AuthUser";
 import { destroyCookie } from 'nookies';
import {useRouter} from "next/router";
import { useEffect } from "react";

const Logout=(ctx)=>{
    const authUser= useContext(AuthUserContext)
    const setUserInfo= useContext(AuthDispatchContext)
    setUserInfo({userInfo: null});
    destroyCookie(null,'cookie', {path: "/"});
    const router=useRouter()
    useEffect(()=>{router.push("/");})

    return null
}

export default Logout;