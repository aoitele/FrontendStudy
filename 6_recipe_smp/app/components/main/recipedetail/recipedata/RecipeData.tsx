import style from './recipedata.module.scss'
import {basicdata} from '../../../../＠types/basicdata'
import { format } from 'date-fns';

type Props={
    basicData: basicdata;
}
const RecipeData:React.FC<Props>=({basicData})=>{
    const date= format(new Date(basicData.insert_date), 'yyyy-MM-dd');
return(
    <ul className={style.wrapper}>
        <li className={style.date}>
            <i className={'commonIcon iconCalender'}></i>
            <p>{date}</p>
        </li>
        <li className={style.category}>
            <span>分類</span>
            <p>{basicData.categoryname}</p>
        </li>
        <li className={style.time}>
            <i className={'commonIcon iconTimer'}></　　i>
            <p>調理時間：{basicData.cookingtime}分</p>
        </li>
        <li className={style.id}>
            <span>ID</span>
            <p>{basicData.recipeid}</p>

        </li>
    </ul>
)
}

export default RecipeData