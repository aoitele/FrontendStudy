import style from './conteiner.module.scss'
import Image from 'next/image'
import RecipeDetail from './recipedetail/RecipeDetail'

const Conteiner=() => {

    return(
        <div className= {style.wrapper}>
            <div className={style.title} >
                    <div className={style.recipename}>
                    <p>recipe-title</p>
                    </div>
                    <div className={style.time}>
                        <i className={'commonIcon iconTimer'}></i>
                        <p>〇〇分</p>
                    </div>

                </div>
            <img src='https://asset.oceans-nadia.com/upload/save_image/ff/ffabb34fbf9725ea2bc56af51cd8c78f.jpg?impolicy=insidewm&w=410&h=614'/>
            <RecipeDetail />
        </div>
    )
}

export default Conteiner;