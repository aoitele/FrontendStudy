import style from './conteiner.module.scss';
import RecipeDetail from './recipedetail/RecipeDetail';
import Ingredients from './ingredients/Ingredients';
import Process from './process/Process';
import React, { useContext } from 'react';
import FavoButton from '../favorite/FavoButton';
import { RecipeDataProps } from '../../pages/mypage/[recipeid]';
import { AuthUserContext } from '../userprovider/AuthUser';

// import Link from 'next/link';

interface Props {
  recipeDatas: RecipeDataProps;
  setRecipeDatas: React.Dispatch<React.SetStateAction<RecipeDataProps>>;
}

const Conteiner: React.FC<Props> = ({ recipeDatas, setRecipeDatas }) => {
  const [recipeData, ingredientData, processData] = [
    recipeDatas.recipeData,
    recipeDatas.ingredientData,
    recipeDatas.processData,
  ];
  const authUser = useContext(AuthUserContext);

  return (
    <div className={style.wrapper}>
      {/* <Link href="/mypage/4">
             <a>recipe4</a>
           </Link> */}
      <div className={style.title}>
        <div className={style.recipename}>
          <h1>{recipeData.recipe_name}</h1>
        </div>
        <div className={style.time}>
          <i className={'commonIcon iconTimer'}></i>
          <p>{recipeData.cooking_time}分</p>
        </div>
      </div>
      <img src={`${recipeData.img}`} />
      <RecipeDetail recipeData={recipeData} />
      <Ingredients ingredientData={ingredientData} />
      <Process processData={processData} />
      {typeof authUser.userInfo !== 'undefined' && (
        <FavoButton recipeDatas={recipeDatas} setRecipeDatas={setRecipeDatas} />
      )}
    </div>
  );
};

export default Conteiner;
