import { useRouter } from 'next/router';
import style from  './../home/homecontainer.module.scss';


const HomeContainer =(recipeData)=>{
   console.log(recipeData)  
    const Router = useRouter();
    const changeRecipe = (e) => {
       Router.push(`/mypage/${e.id}`); 
        
    };
    return(
       <div className={style.wrapper}>
        
        <a id='4'  onClick={(e)=>{changeRecipe(e.target)}}>レシピ4</a>
        <a id='6' onClick={(e)=>{changeRecipe(e.target)}}>レシピ6</a>
        <a id='10' onClick={(e)=>{changeRecipe(e.target)}}>レシピ10</a>
      </div>
    )
};

export default HomeContainer;