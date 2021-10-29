import style from './recipedata.module.scss'

const RecipeData=()=>{
return(
    <ul className={style.wrapper}>
        <li className={style.date}>
            <i className={'commonIcon iconCalender'}></i>
            <p>2021.10.25</p>
        </li>
        <li className={style.category}>
            <span>分類</span>
            <p>おやつ</p>
        </li>
        <li className={style.time}>
            <i className={'commonIcon iconTimer'}></　　i>
            <p>調理時間：20分</p>
        </li>
        <li className={style.id}>
            <span>ID</span>
            <p>424512</p>

        </li>
    </ul>
)
}

export default RecipeData