import styles from "../styles/scss/foundation/header.module.scss"
import HeaderSearch from "./HeaderSearch"
import HeaderMenu from "./HeaderMenu"
import HeaderNav from "./HeaderNav"

const Header=()=>{
return(
    <div className={styles.header}>
      <div className={styles.header__inner}>
       <div className={styles.header__logo}>
       　<a href="/">
         <img src="https://asset.oceans-nadia.com/2018/pc/images/nadia-logo.jpg" width="166" alt="レシピサイト Nadia | ナディア - プロの料理家のおいしいレシピ">
           </img>
        </a>
        </div>
        <HeaderSearch></HeaderSearch>
        <HeaderMenu></HeaderMenu>
     </div> 
     <HeaderNav></HeaderNav>

     
    </div>
    
)
}
export default Header