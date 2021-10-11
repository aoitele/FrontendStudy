import style from '../../styles/scss/main/main.module.scss';
import MainBox from './MainBox';
import { useEffect, useState } from 'react';
import RecipeCategory from './RecipeCategory';

interface RecipeFilterProps {
  time_filter: number | null;
  category_filter: string | null | number;
}

interface Props {
  data: Data.ApiResponse;
  recipe_filters: RecipeFilterProps;
  changeUser: (e: string) => void;
  changeTime: (e: number) => void;
  recipeDelete: (e: Data.favoriteRecipes) => void;
  changeCategory: (e: string) => void;
}

const Content: React.FC<Props> = ({
  data,
  recipe_filters,
  changeTime,
  changeUser,
  recipeDelete,
  changeCategory,
}) => {
  return (
    <div className={style.main}>
      <aside className={style.aside}>
        <div className={style.search}>
          <form>
            <select onChange={(e) => changeUser(e.target.value)}>
              <option value='0'>ユーザーを切り替える</option>
              <option value='1'>ドラえもん</option>
              <option value='2'>のびたくん</option>
              <option value='3'>どらみちゃん</option>
            </select>
          </form>
        </div>
        <div className={style.search}>
          <form>
            <h5>調理時間で絞り込み</h5>
            <select
              className={style.search_select}
              onChange={(e) => changeTime(Number(e.target.value))}
            >
              <option value='0'>指定なし</option>
              <option value='10'>10分以内</option>
              <option value='20'>20分以内</option>
              <option value='30'>30分以内</option>
            </select>
          </form>
        </div>
        <div className={style.search}>
          <h5>レシピ分類で絞り込み</h5>
          <RecipeCategory
            data={data}
            recipe_filters={recipe_filters}
            changeCategory={changeCategory}
          ></RecipeCategory>
        </div>
      </aside>

      <MainBox data={data} recipeDelete={recipeDelete}></MainBox>
    </div>
  );
};

export default Content;
