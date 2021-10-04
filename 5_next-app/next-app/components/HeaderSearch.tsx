import styles from "../styles/scss/foundation/header.module.scss"
import searchStyles from "../styles/scss/foundation/search.module.scss"
import SearchTag from "./HeaderTag"
import  variable from '../styles/scss/foundation/variables.module.scss'

const HeaderSearch = ()=>{
    return(
        <div className={searchStyles.header__search}>
        {/* 検索フォーム */}
       <section className={searchStyles.c_search}>
         <fieldset className={searchStyles.c_search__field}>
           <form name="search_form" method="get" className={searchStyles.c_search__form} action="/search">
             <div className={searchStyles.c_search__type_box}>
                <select name="type" id="type" className={searchStyles.c_search__type}>
                    <option value="" selected="">レシピを検索</option>
                    <option value="記事">記事を検索</option>
                    <option value="Artist">Artistを検索</option>
                </select>
             </div>
             <input type="text" name="q" id="headerkeyword" className={searchStyles.c_search__input} autoComplete="off" placeholder="料理名・食材名・イベント名" itemProp="query-input" ></input>
             <button id="global-search-submit" className={searchStyles.c_search__button}>
               <i className={`${searchStyles.icon_search} iconSearch commonIcon`}></i>
             </button>
             
            </form>
         </fieldset>
         <SearchTag></SearchTag>
       </section>
       　
      </div>
    )
}

export default HeaderSearch