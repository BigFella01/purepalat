import AppNav from '../../components/AppNav/AppNav'
import Footer from '../../components/Footer/Footer'
import RecipeBuilder from '../../components/RecipeBuilder/RecipeBuilder'
import styles from './FoodData.module.css'

function MakeRecipe() {
  return (
    <div className={styles.page}>
      <AppNav />
      <RecipeBuilder />
      <Footer />
    </div>
  )
}

export default MakeRecipe
