import style from "./ingredients.module.scss"
import {ingredientdata} from '../../../＠types/basicdata'

type Props ={
ingredientData: ingredientdata[];
}

const Ingredients:React.FC<Props>=({ingredientData})=>{
    console.log(ingredientData);

    const datas=[{ingredient:"くり",quontity:"8個"},
                {ingredient:"卵",quontity:"２個"},
                {ingredient:"小麦粉",quontity:"大さじ２"},
                {ingredient:"クリームチーズ",quontity:"200g"},
                {ingredient:"牛乳",quontity:"50g"}]
                
   
    return(
     <div className={style.wrapper}>
         <div className={style.title}>
          <h2>材料</h2>
         </div>
        

         <dl>
        
        {ingredientData.map((data)=>{


          return(
            <dt>
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