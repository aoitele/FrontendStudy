import styles from "../styles/scss/foundation/header.module.scss"
import searchStyles from "../styles/scss/foundation/search.module.scss"

const HeaderTag =()=>{
    return(
     <div className={styles.tag}>
         <p className={styles.tag_head}>注目ワード</p>
         <ul className={styles.tag_list}>
           <li><a href="https://oceans-nadia.com/search?type=&q=%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC"className={styles.tag_list}>コーヒー</a></li>
           <li><a href="https://oceans-nadia.com/search?q=%E3%82%B3%E3%82%B3%E3%83%8A%E3%83%83%E3%83%84"className={styles.tag_list}>ココナッツ</a></li>
           <li><a href="https://oceans-nadia.com/search?q=%E3%83%95%E3%83%AB%E3%83%BC%E3%83%84%E3%82%B5%E3%83%B3%E3%83%89"className={styles.tag_list}>フルーツサンド</a></li>
           <li><a href="https://oceans-nadia.com/search?q=%E3%83%99%E3%83%BC%E3%82%B0%E3%83%AB"className={styles.tag_list}>ベーグル</a></li>
         </ul>
        </div>
    )
}
export default HeaderTag