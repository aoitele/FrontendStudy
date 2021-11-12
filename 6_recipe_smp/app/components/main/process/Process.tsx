import style from "./process.module.scss"
import {processdata} from '../../../＠types/basicdata'

type Props ={
processData: processdata[];
}

const Process:React.FC<Props> =({processData})=>{
    const pointRemovedData= processData.slice(1);  
   
    return(
     <div className={style.wrapper}>
         <div className={style.title}>
                <h2>作り方</h2>
             </div>
        <div className={style.point}>
                <h6>Point !</h6>
                <p> {processData[0].process_explain}</p>
         </div>
        <dl className={style.process}>
         {
         pointRemovedData.map((data)=>{
             return(
                <dt>
                <dd className={style.order}>{data.process_number}</dd>
                <dd>{data.process_explain}</dd>
               </dt>
             )
         })}
        </dl>

       
     </div>
    )
}

export default Process;