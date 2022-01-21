import Layout from '../components/layout/Layout';
import HomeContainer from '../components/main/home/HomeContainer';
import { AxiosClient } from '../modules/request';
import { RecipeData } from '../＠types/basicdata';

type Props = {
  recipeData: RecipeData;
};

const Home: React.FC<Props> = ({ recipeData }) => {
  return (
    <div>
      <Layout>
        <HomeContainer recipeData={recipeData} />
      </Layout>
    </div>
  );
};

export const getServerSideProps = async (ctx: any) => {
  try {
    const axios = AxiosClient();
    const res = await axios.get('recipes');

    return { props: { recipeData: res.data.recipeData } };

    //このpropsは上のPageコンポーネントに渡される
  } catch (err) {
    console.log(err);
    const errorCode =
      typeof err.response === 'undefined' ? 500 : err.response.status;
    return { props: { errorCode } };
  }
};

export default Home;
