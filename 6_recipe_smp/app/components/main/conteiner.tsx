import style from './conteiner.module.scss'
import Image from 'next/image'
import RecipeDetail from './recipedetail/RecipeDetail'
import Ingredients from './ingredients/Ingredients'
import Process from './process/Process'
import React, {useState } from 'react';
import {RecipeApiResponse} from "../../＠types/basicdata";

interface Props {
  recipeDatas: RecipeApiResponse;

}

    const Conteiner:React.FC<Props>=({recipeDatas}) => {
        
        const recipeData=recipeDatas.recipeData;
        const ingredientData=recipeDatas.ingredientData;
        const processData=recipeDatas.processData;

        
    const favoriteCount=Number(recipeData.favorite_count);

    // const[count, setCount]=useState({yummy: 0,favorite:favoriteCount})
    const[count, setCount]=useState(favoriteCount);
    const[favoriteFlag, setFavoriteFlag]=useState(true);
   
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
            <div className={style.title} >
                    <div className={style.recipename}>
                    <p>{recipeData.recipe_name}</p>
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