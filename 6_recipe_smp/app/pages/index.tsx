import Layout from '../components/layout/Layout';
import HomeContainer from '../components/main/home/HomeContainer';
import { AxiosClient } from '../modules/request';
import { RecipeData } from '../＠types/basicdata';
import {useContext, useEffect} from "react";
import {AuthUserContext, AuthDispatchContext} from "../components/userprovider/AuthUser";
import { tokenInspection } from '../modules/tokenInspection';


type Props={
  recipeData: RecipeData
}

const Home: React.FC<Props> = ({recipeData}) => {
  const authUser = useContext(AuthUserContext)
  const setUserInfo= useContext(AuthDispatchContext)
    useEffect(()=>{
      if(typeof(authUser.userInfo) == "undefined"){
      tokenInspection().then(
        value=>{setUserInfo({userInfo: value})}
        )
      }
    },[])


  return (
    <div>
      <Layout>
      <HomeContainer recipeData={recipeData}/>
      </Layout>
      
    
     </div>
  )
};

export const getServerSideProps = async (ctx: any) => {
  try {
    const axios = AxiosClient();
    const res = await axios.get('recipes');

    return { props: { recipeData: res.data.recipeData} };

    //このpropsは上のPageコンポーネントに渡される
  } catch (err) {
    console.log(err)
    const errorCode = typeof err.response === "undefined"?  500: err.response.status;
    return { props: { errorCode } };
  } 
};

export default Home;
