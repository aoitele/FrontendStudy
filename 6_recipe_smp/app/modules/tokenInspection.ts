import { parseCookies } from 'nookies';
import { NextPageContext } from 'next';
import { AxiosClient } from './request';
import { LoginedUserData } from '../＠types/basicdata';

type TokenInspection= ()=>Promise<LoginedUserData | null>

export const tokenInspection:TokenInspection = async(ctx?:NextPageContext ) => {
        const cookie= parseCookies(ctx)
        if(typeof(cookie.cookie)==="undefined"){
            return null 
            }
        try{ const axios = AxiosClient();
            console.log(cookie,"cookie")
            const res = await axios.post('token', {params: cookie});
            const userinfo=res.data.data[0]
            return userinfo;
        }catch(err){
           console.log(err)}
       
}