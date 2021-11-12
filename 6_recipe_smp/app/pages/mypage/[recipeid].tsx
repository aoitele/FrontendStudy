import React from 'react';
import Error from 'next/error';
import Layout from '../../components/layout/Layout'
import Conteiner from '../../components/main/conteiner';
import { AxiosClient } from '../../modules/request';
import  { RecipeApiResponse } from "../../＠types/basicdata"

interface Props {
  recipeDatas: RecipeApiResponse;
  errorCode:number;

}
const MyPage :React.FC<Props>=({recipeDatas, errorCode})=>{
  console.log(recipeDatas.recipeData);


    if (errorCode) {
        return <Error statusCode={errorCode} />;
      } 
    
    return(
      <Layout>
      <Conteiner recipeDatas={recipeDatas} ></Conteiner>
    </Layout>   
    )
}

export const getServerSideProps = async (ctx: any) => {
  try {
    const id = ctx.params.recipeid;
    const axios = AxiosClient();
    const res = await axios.get(`recipe/${id}`);
   console.log(res.data.recipeDatas,"serversideprops")
    return { props: { recipeDatas: res.data.recipeDatas} };

    //このpropsは上のPageコンポーネントに渡される
  } catch (err) {
    console.log(err)
    const errorCode = typeof err.response === "undefined"?  500: err.response.status;
    return { props: { errorCode } };
  } 
};

export default MyPage;
