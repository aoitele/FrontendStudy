import style from './conteiner.module.scss'
import Image from 'next/image'
import RecipeDetail from './recipedetail/RecipeDetail'
import Ingredients from './ingredients/Ingredients'
import Process from './process/Process'
import React, {useState } from 'react';
import {RecipeApiResponse} from "../../＠types/basicdata";
// import Link from 'next/link';


interface Props {
  recipeDatas: RecipeApiResponse;
  favoriteFlag: boolean;
  setFavoriteFlag:React.Dispatch<React.SetStateAction<boolean>>;

}

    const Conteiner:React.FC<Props>=({ recipeDatas, favoriteFlag, setFavoriteFlag }) => {
    
    const [recipeData, ingredientData, processData] = [recipeDatas.recipeData, recipeDatas.ingredientData, recipeDatas.processData];
    const favoriteCount=Number(recipeData.favorite_count);

    const[count, setCount]=useState(favoriteCount);
   
    const hanfleClickCount=(e)=>{
        setFavoriteFlag(!favoriteFlag); 
        e.target.classList.toggle("iconHeart"); 
        e.target.classList.toggle("iconHeart-line"); 
        if(favoriteFlag){
        setCount(count+1);
        }
        else{
       
        setCount(favoriteCount);
        } 
        
    }
      
    


    return(
        <div className= {style.wrapper}>
            {/* <Link href="/mypage/4">
             <a>recipe4</a>
           </Link> */}
            <div className={style.title} >
                    <div className={style.recipename}>
                    <h1>{recipeData.recipe_name}</h1>
                    </div>
                    <div className={style.time}>
                        <i className={'commonIcon iconTimer'}></i>
                        <p>{recipeData.cooking_time}分</p>
                    </div>

                </div>
            <img src={`${recipeData.img}`}/>
            <RecipeDetail recipeData={recipeData} />
            <Ingredients ingredientData={ingredientData}/>
            <Process processData={processData}/>
            <div className={style.buttons}>
               
                <a  onClick={(e)=>{hanfleClickCount(e)}}>
                    <span>お気に入りに入れる</span>
                    <span className={'commonIcon iconHeart-line'} >{count}</span>
                    </a>
            </div>
        </div>
    )
}

export default Conteiner;