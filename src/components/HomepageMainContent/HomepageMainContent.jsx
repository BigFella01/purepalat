import { Link } from "react-router-dom"
import styles from './HomepageMainContent.module.css'

function HomepageMainContent() {
  return (
    <div className={styles.page}>
      <h3 className={styles.pageTitle}>Keep track of what you eat, and have fun with it.</h3>
      <p className={styles.pageText}>PurePalate gives you the dietary information you need. Find or make a recipe, and get corresponding nutrient breakdowns. </p>
      <Link to="/findrecipe" className={styles.pageLink}>Find a recipe</Link>
    </div>
  )
}

export default HomepageMainContent
