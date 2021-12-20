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
        

         
        
        {ingredientData.map((data, index)=>{
          return(
            <dl key={`ingredient${index}`}>
            <dt>{data.ingredient_name}</dt>
            <dd>{data.ingredient_amount}</dd>
            </dl>
          )
        })}
        
     </div>
    )
}

export default Ingredients