import style from './recipedetail.module.scss'
import RecipeDataShortVer from './recipedata/RecipeDataShortVer'
import {RecipeData} from '../../../＠types/basicdata'

type Props={
recipeData: RecipeData;
}
const RecipeDetail:React.FC<Props>= ({ recipeData }) =>{
   
    return(
     <div>
         <RecipeDataShortVer recipeData={recipeData}/>
          <div className={style.artist}>
          <a href="https://oceans-nadia.com/user/364420">
                <div className={style.artist_img}>
                    <img src="https://asset.oceans-nadia.com/upload/save_image/2f/2fa2393379dd33a1d0104872d5d6a238.jpg?impolicy=insidewm&w=410&h=614"　width={50} height={50}></img>
                </div>
                <div className={style.artist_info}>
                    <p className={style.name}>{recipeData.user_name}</p>
                    <p>{recipeData.user_introduction}</p>
                </div>
                <i className={'commonIcon iconAngleRight'} ></i>
         </a>
         </div>
         <div className={style.explain}>
             <p>{recipeData.explain}</p>
         </div>
     </div>
    )
}

export default RecipeDetail;