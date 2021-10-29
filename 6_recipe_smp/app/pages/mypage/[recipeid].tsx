import React from 'react';
import Error from 'next/error';
import Layout from '../../components/layout/Layout'
import Conteiner from '../../components/main/conteiner';

const MyPage :React.FC=(props)=>{
    
    // if (props.errorCode) {
    //     return <Error statusCode={errorCode} />;
    //   } 
    
    return(
      <Layout>
      <Conteiner></Conteiner>
    </Layout>   
    )
}

// export const getServerSideProps = async(ctx: any)=>{
//     try{
//         console.log(ctx)
//         const params = ctx.params.recipeid;
//         const axios = AxiosClient();
//         const res = await axios.get('data', { params: { recipeid: params } });
//         console.log(res, 'serversideprops');
//         return { props: { data: res.data.data } };

//     }catch(err){
//         const errorCode= err.response.status;
//         return{props: {errorCode}};
//     }
// }

export default MyPage;