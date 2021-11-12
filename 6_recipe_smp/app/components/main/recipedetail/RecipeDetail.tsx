import style from './recipedetail.module.scss'
import RecipeData from './recipedata/RecipeData'
import {basicdata} from '../../../＠types/basicdata'

type Props={
basicData: basicdata;
}
const RecipeDetail:React.FC<Props>= ({ basicData }) =>{
    console.log(basicData)
   
    return(
     <div>
         <RecipeData basicData={basicData}/>
          <div className={style.artist}>
          <a href="https://oceans-nadia.com/user/364420">
                <div className={style.artist_img}>
                    <img src="https://asset.oceans-nadia.com/upload/save_image/2f/2fa2393379dd33a1d0104872d5d6a238.jpg?impolicy=insidewm&w=410&h=614"　width={50} height={50}></img>
                </div>
                <div className={style.artist_info}>
                    <p　className={style.name}>{basicData.username}</p>
                    <p>{basicData.user_introduction}</p>
                </div>
                <i className={'commonIcon iconAngleRight'} ></i>
         </a>
         </div>
         <div className={style.explain}>
             <p>{basicData.explain}</p>
         </div>
     </div>
    )
}

export default RecipeDetail;