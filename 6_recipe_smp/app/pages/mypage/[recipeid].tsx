import React  from 'react';
import Error from 'next/error';
import Layout from '../../components/layout/Layout'
import Conteiner from '../../components/main/conteiner';
import { AxiosClient } from '../../modules/request';
import  { RecipeApiResponse } from "../../＠types/basicdata"
import LoginModal from '../../components/modal/LoginModal'



interface Props {
  recipeDatas: RecipeApiResponse;
  errorCode:number;

}
const MyPage :React.FC<Props>=({recipeDatas, errorCode})=>{

    if (errorCode) {
        return <Error statusCode={errorCode} />;
      } 
    
    return(
     <div> 
        <Layout>
        <Conteiner recipeDatas={recipeDatas} ></Conteiner>
        </Layout> 
   </div>
        
      
      
    )
}

export const getServerSideProps = async (ctx: any) => {
  console.log(ctx,"ctxxxxxxxxxxxxxxxx")
  try {
    const id = ctx.params.recipeid;
    const axios = AxiosClient();
    const res = await axios.get(`recipe/${id}`);
    // console.log(res.data.recipeDatas,"serversideprops")
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
