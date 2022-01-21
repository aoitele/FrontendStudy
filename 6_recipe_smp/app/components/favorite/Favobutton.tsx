import style from './favobutton.module.scss';
import React, { useState, useContext } from 'react';
import { AuthUserContext } from '../userprovider/AuthUser';
import { RecipeData } from '../../＠types/basicdata';
import { AxiosClient } from '../../modules/request';

type favoProps = {
  recipeid: number;
  isFlag: boolean;
}[];

interface Props {
  recipeData: RecipeData;
}
const FavoButton: React.FC<Props> = ({ recipeData }) => {
  const favoriteCount = Number(recipeData.favorite_count);
  const recipeid = recipeData.id;
  const [count, setCount] = useState(favoriteCount);
  const authUser = useContext(AuthUserContext);

  const handleClickCount = (e) => {
    if (recipeData) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  const heartColor = () => {
    if (recipeData) {
      return (
        <div>
          <span className={'commonIcon iconHeart'}>{count}</span>
        </div>
      );
    } else {
      return (
        <div>
          <span className={'commonIcon iconHeart-line'}>{count}</span>
        </div>
      );
    }
  };

  return (
    <div className={style.button}>
      {/* userがログインしていなかったらログインモーダル表示 */}
      {authUser.userInfo ? (
        <a
          onClick={(e) => {
            handleClickCount(e);
          }}
        >
          <span>お気に入りに入れる</span>
          {heartColor()}
        </a>
      ) : (
        <a
          onClick={(e) => {
            handleClickCount(e);
          }}
        >
          <span>お気に入りに入れる</span>
          {heartColor()}
        </a>
      )}
    </div>
  );
};

export default FavoButton;
