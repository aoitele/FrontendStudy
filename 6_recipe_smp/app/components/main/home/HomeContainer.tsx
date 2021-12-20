import { useRouter } from 'next/router';
import style from  './../home/homecontainer.module.scss';


const HomeContainer =({recipeData})=>{
    const Router = useRouter();
    const changeRecipe = (e) => {
       Router.push(`/mypage/${e.id}`); 
    };
    return(
       <div className={style.wrapper}>
          {recipeData.map((data)=>{
             return(
                <a  id={data.id} key={data.id} onClick={(e)=>{changeRecipe(e.currentTarget)}}>
                  <div>{data.recipe_name}</div>
                  
                </a>
             )
          })}
      </div>
    )
};

export default HomeContainer;