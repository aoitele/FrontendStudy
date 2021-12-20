import React, { useEffect }  from 'react';
import Error from 'next/error';
import Layout from '../../components/layout/Layout'
import Conteiner from '../../components/main/conteiner';
import { AxiosClient } from '../../modules/request';
import  { RecipeApiResponse } from "../../＠types/basicdata"
import {useContext} from "react";
import {AuthUserContext, AuthDispatchContext} from "../../components/userprovider/AuthUser";
import { tokenInspection } from '../../modules/tokenInspection';
import { useRouter } from "next/router";
import {useState } from 'react';



interface Props {
  recipeDatas: RecipeApiResponse;
  errorCode:number;

}
const MyPage :React.FC<Props>=({recipeDatas, errorCode})=>{
  const authUser = useContext(AuthUserContext)
  const setUserInfo= useContext(AuthDispatchContext)
  const [favoriteFlag, setFavoriteFlag ]= useState<boolean>(false);
    useEffect(()=>{
      if(typeof(authUser.userInfo) == "undefined"){
      tokenInspection().then(
        value=>setUserInfo({userInfo: value}) 
      )
      }
    },[])

    useEffect(()=>{
      if(authUser.userInfo){
           checkfavo();  
        }
    },[authUser.userInfo])

    const checkfavo= async ()=>{
       
      try{
       const axios = AxiosClient();
       const router =useRouter();
       const recipeid= router.query.recipeid;
       const userid = authUser.userInfo.id
       const res = await axios.get('recipe/checkfavo',{params:{ userid: userid , recipeid: recipeid}}); 
       if(res.data){
       setFavoriteFlag(false)
       }
      
      }catch(err){
        return <Error statusCode={errorCode} />
      }
    }
   


    if (errorCode) {
        return <Error statusCode={errorCode} />;
      } 
  
    
    return(
     <div> 
        <Layout>
        <Conteiner recipeDatas={recipeDatas} favoriteFlag={favoriteFlag} setFavoriteFlag={setFavoriteFlag}></Conteiner>
        </Layout> 
   </div>
        
      
      
    )
}


export const getServerSideProps = async (ctx: any) => {
 
  try {
     
    const id = ctx.params.recipeid;
    const axios = AxiosClient();
    const res = await axios.get(`recipe/${id}`);
    if(res.data.recipeDatas.length==0){
      return { props: { errorCode: 500 } };
    }
    return { props: { recipeDatas: res.data.recipeDatas} };
    
   
    //このpropsは上のPageコンポーネントに渡される
  } catch (err) {
    console.log(err)
    const errorCode = typeof err.response === "undefined"?  500: err.response.status;
    return { props: { errorCode } };
  } 
};

export default MyPage;
