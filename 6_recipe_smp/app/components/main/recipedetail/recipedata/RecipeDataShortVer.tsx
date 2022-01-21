import style from './recipedatashortver.module.scss';
import { RecipeData } from '../../../../＠types/basicdata';
import { format } from 'date-fns';

type Props = {
  recipeData: RecipeData;
};
const RecipeDataShortVer: React.FC<Props> = ({ recipeData }) => {
  const date = format(new Date(recipeData.insert_date), 'yyyy-MM-dd');
  return (
    <ul className={style.wrapper}>
      <li className={style.date}>
        <i className={'commonIcon iconCalender'}></i>
        <p>{date}</p>
      </li>
      <li className={style.category}>
        <span>分類</span>
        <p>{recipeData.category_name}</p>
      </li>
      <li className={style.time}>
        <i className={'commonIcon iconTimer'}></i>
        <p>調理時間:{recipeData.cooking_time}分</p>
      </li>
      <li className={style.id}>
        <span>ID</span>
        <p>{recipeData.id}</p>
      </li>
    </ul>
  );
};

export default RecipeDataShortVer;
