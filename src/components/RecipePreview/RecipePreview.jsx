import { Link } from 'react-router-dom'
import styles from './RecipePreview.module.css'

function RecipePreview({ result, query, id }) {
  return (
    <Link
      to={`/findrecipe/details/${query}/${id}`}
      className={styles.recipePreview}
    >
      <div className={styles.recipePreviewContainer}>
        <img
          src={result.recipe.image}
          className={styles.recipePreviewImg}
          alt="recipe"
        ></img>
        <p className={styles.recipePreviewName}>{result.recipe.label}</p>
        <div className={styles.nutritionInfoContainer}>
          <span className={styles.nutritionInfo}>
            carbs: {Math.round(result.recipe.totalNutrients.CHOCDF.quantity)}
          </span>
          <span className={styles.nutritionInfo}>
            fat: {Math.round(result.recipe.totalNutrients.FAT.quantity)}
          </span>
          <span className={styles.nutritionInfo}>
            protein: {Math.round(result.recipe.totalNutrients.PROCNT.quantity)}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default RecipePreview

// What will be implemented on site:

// FIND RECIPE PAGE

// A filter mechanism. The user will toggle the state
// of the filter mechanism. When true, a window will
// slide into view, which will enable the user to filter
// their recipe search.

// Once the user loads a recipe they searched
// for, there will be a link that leads to a page
// with details about that recipe.

// MAKE RECIPE PAGE
// This page will allow the user to build repipes. These
// created recipes will present the same nutrional
// information. If the user is logged in, they will be
// able to save their recipe in localStorage.
