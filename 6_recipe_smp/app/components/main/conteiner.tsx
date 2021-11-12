import style from './conteiner.module.scss'
import Image from 'next/image'
import RecipeDetail from './recipedetail/RecipeDetail'
import Ingredients from './ingredients/Ingredients'
import Process from './process/Process'
import React, {useState } from 'react';
import {basicdata, ingredientdata, processdata} from "../../＠types/basicdata";

interface Props {
  basicData: basicdata;
  ingredientData:ingredientdata[];
  processData: processdata[];
}

    const Conteiner:React.FC<Props>=({basicData,ingredientData, processData}) => {
    const favoriteCount=Number(basicData.favorite_count);
    console.log(favoriteCount)

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
                    <p>{basicData.recipename}</p>
                    </div>
                    <div className={style.time}>
                        <i className={'commonIcon iconTimer'}></i>
                        <p>{basicData.cookingtime}分</p>
                    </div>

                </div>
            <img src={`${basicData.img}`}/>
            <RecipeDetail basicData={basicData} />
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