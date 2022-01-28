import style from './favobutton.module.scss';
import React, { useState, useContext } from 'react';
import { AuthUserContext } from '../userprovider/AuthUser';
import { RecipeDataProps } from '../../pages/mypage/[recipeid]';
import favopost from '../../modules/favopost';
import favodelete from '../../modules/favodelete';

interface Props {
  recipeDatas: RecipeDataProps;
  setRecipeDatas: React.Dispatch<React.SetStateAction<RecipeDataProps>>;
}
const FavoButton: React.FC<Props> = ({ recipeDatas, setRecipeDatas }) => {
  const [recipeData] = [recipeDatas.recipeData];
  const favoriteCount = Number(recipeData.favorite_count);
  const recipeid = recipeData.id;
  const [count, setCount] = useState(favoriteCount);
  const authUser = useContext(AuthUserContext);

  const handleClickCount = (e) => {
    const userid = authUser.userInfo.id;
    if (recipeDatas.isFavorite) {
      setCount(count - 1);
      favodelete(userid, recipeid);
      setRecipeDatas({ ...recipeDatas, isFavorite: false });
    } else {
      const userid = authUser.userInfo.id;
      favopost(userid, recipeid);
      setCount(count + 1);
      setRecipeDatas({ ...recipeDatas, isFavorite: true });
    }
  };

  const heartColor = () => {
    if (recipeDatas.isFavorite) {
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
