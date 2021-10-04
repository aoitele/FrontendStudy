import styles from "../styles/scss/foundation/header.module.scss"

const HeaderNav= ()=>{
    return(
     <div>
         <nav className={styles.header__nav}>
          <div className={styles.header__nav__inner}>
           <ul className={styles.header__nav_list}>
           <li><a href="/recipe/tag">カテゴリ検索</a></li>
           <li><a href="/search?type=Artist">Nadia Artist検索</a></li>
           <li><a href="/ranking">ランキング</a></li>
           <li><a href="/cooking_basics">料理の基礎</a></li>
           <li><a href="/article">Nadiaコラム</a></li>
           <li><a href="/timeline">タイムライン</a></li>
           <li><a href="/special_sites/about_nadia">nadiaとは</a></li>
           <li><a href="/premium">プレミアム</a></li>
           </ul>
          </div>
         </nav>
         
     </div>
    )
}

export default HeaderNav