import style from './recipedetail.module.scss'
import RecipeData from './recipedata/RecipeData'

const RecipeDetail= () =>{
    return(
     <div>
         <RecipeData/>
          <div className={style.artist}>
          <a href="https://oceans-nadia.com/user/364420">
                <div className={style.artist_img}>
                    <img src="https://asset.oceans-nadia.com/upload/save_image/2f/2fa2393379dd33a1d0104872d5d6a238.jpg?impolicy=insidewm&w=410&h=614"　width={50} height={50}></img>
                </div>
                <div className={style.artist_info}>
                    <p　className={style.name}>おやつラボ</p>
                    <p>楽しいおいしいヘルシーおやつ</p>
                </div>
                <i className={'commonIcon iconAngleRight'} ></i>
         </a>
         </div>
         <div className={style.explain}>
             <p>秋の栗を贅沢に使ったレシピです。チーズケーキの濃厚なコクと、栗の素朴な甘さがたまりません。深煎りのコーヒーとよく合いますよ</p>
         </div>
     </div>
    )
}

export default RecipeDetail;