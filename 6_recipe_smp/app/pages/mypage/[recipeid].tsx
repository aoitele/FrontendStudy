import React from 'react';
import Error from 'next/error';
import Layout from '../../components/layout/Layout'
import Conteiner from '../../components/main/conteiner';
import { AxiosClient } from '../../modules/request';
import {basicdata, ingredientdata, processdata} from "../../＠types/basicdata"

interface Props {
  basicData: basicdata;
  ingredientData:ingredientdata[];
  processData: processdata[];
  errorCode: any;

}
const MyPage :React.FC<Props>=({basicData, ingredientData, processData, errorCode})=>{
    console.log(processData);



    if (errorCode) {
        return <Error statusCode={errorCode} />;
      } 
    
    return(
      <Layout>
      <Conteiner basicData={basicData[0]} ingredientData={ingredientData} processData={processData}></Conteiner>
    </Layout>   
    )
}

export const getServerSideProps = async (ctx: any) => {
  try {
    const params = ctx.params.recipeid;
    const axios = AxiosClient();
    const res = await axios.get('data', { params: { recipeid: params } });
    console.log(res.data, 'serversidepropssssssssssssssssss');

    return { props: { basicData: res.data.basicData, ingredientData: res.data.ingredientData, processData: res.data.processData } };

    //このpropsは上のPageコンポーネントに渡される
  } catch (err) {
    console.log(err)
    const errorCode = typeof err.response === "undefined"?  500: err.response.status;
    return { props: { errorCode } };
  } 
};

export default MyPage;