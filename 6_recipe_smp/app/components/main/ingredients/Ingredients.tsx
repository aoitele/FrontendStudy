import style from "./ingredients.module.scss"
import {IngredientData} from '../../../＠types/basicdata'

type Props ={
ingredientData: IngredientData;
}

const Ingredients:React.FC<Props>=({ingredientData})=>{

 
    return(
     <div className={style.wrapper}>
         <div className={style.title}>
          <h2>材料</h2>
         </div>
        

         <dl>
        
        {ingredientData.map((data)=>{
          return(
            <dt key={data.recipe_id}>
            <dd>{data.ingredient_name}</dd>
            <dd>{data.ingredient_amount}</dd>
           </dt>
          )
        })}
        </dl>
     </div>
    )
}

export default Ingredients