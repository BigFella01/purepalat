import { useRecipe } from '../../../contexts/RecipeContext'
import styles from './RecipeFilter.module.css'
import { useRef } from 'react'

function RecipeFilter() {
  const {
    isFiltering,
    setIsFiltering,
    numIngredients,
    dispatch,
    setCalories
  } = useRecipe()
  
  const dietLabelRef = useRef(null)
  const healthLabelRef = useRef(null)
  const cuisineTypeRef = useRef(null)
  const mealTypeRef = useRef(null)
  const dishTypeRef = useRef(null)

  function getSelectedValues(ref) {
    const selected = Array.from(ref.current.options)
      .filter(function(option) {
        return option.selected
      })
      .map(function(option) {
        return option.value
      })

    return selected
  }

  const isShowingClass = !isFiltering ? styles.hidden : ''

  return (
    <div className={styles.container}>
      <div className={`${styles.recipeFilter} ${isShowingClass}`}>
        <button
          className={styles.closeFilterBtn}
          onClick={() => setIsFiltering(false)}
        >
          &#10005;
        </button>
        <div className={styles.reciperFilterInput}>
          <label htmlFor="ingNumber">Number of ingredients</label>
          <input
            type="text"
            placeholder="ex: 5-8"
            id="ingNumber"
            onChange={e =>
              dispatch({ type: 'setNumIngs', payload: e.target.value })
            }
            value={numIngredients}
          ></input>
        </div>
        <div className={styles.reciperFilterInput}>
          <label>Diet label</label>
          <select
            ref={dietLabelRef}
            onChange={() =>
              dispatch({
                type: 'setDietLabels',
                payload: getSelectedValues(dietLabelRef)
              })
            }
            multiple={true}
          >
            <option></option>
            <option>balanced</option>
            <option>high-fiber</option>
            <option>high-protein</option>
            <option>low-carb</option>
            <option>low-fat</option>
            <option>low-sodium</option>
          </select>
        </div>
        <div className={styles.reciperFilterInput}>
          <label htmlFor="health">Health label</label>
          <select
            ref={healthLabelRef}
            onChange={() =>
              dispatch({
                type: 'setHealthLabels',
                payload: getSelectedValues(healthLabelRef)
              })
            }
            id="health"
            multiple={true}
          >
            <option></option>
            <option>alcohol-cocktail</option>
            <option>alcohol-free</option>
            <option>celery-free</option>
            <option>crustacean-free</option>
            <option>dairy-free</option>
            <option>egg-free</option>
            <option>fish-free</option>
            <option>gluten-free</option>
            <option>immuno-supportive</option>
            <option>keto-friendly</option>
            <option>kidney-friendly</option>
            <option>low-sugar</option>
            <option>Mediterranean</option>
            <option>Paleo</option>
            <option>peanut-free</option>
            <option>vegan</option>
            <option>wheat-free</option>
          </select>
        </div>
        <div className={styles.reciperFilterInput}>
          <label htmlFor="cuisine">Cuisine type</label>
          <select
            ref={cuisineTypeRef}
            onChange={() =>
              dispatch({
                type: 'setCuisineTypes',
                payload: getSelectedValues(cuisineTypeRef)
              })
            }
            id="cuisine"
            multiple={true}
          >
            <option></option>
            <option>American</option>
            <option>Asian</option>
            <option>British</option>
            <option>Caribbean</option>
            <option>Central Europe</option>
            <option>Chinese</option>
            <option>Eastern Europe</option>
            <option>French</option>
            <option>Indian</option>
            <option>Italian</option>
            <option>Japanese</option>
            <option>Kosher</option>
            <option>Mediterranean</option>
            <option>Mexican</option>
            <option>Middle Eastern</option>
            <option>Nordic</option>
            <option>South American</option>
            <option>South East Asia</option>
          </select>
        </div>
        <div className={styles.reciperFilterInput}>
          <label htmlFor="meal">Meal type</label>
          <select
            ref={mealTypeRef}
            onChange={() =>
              dispatch({
                type: 'setMealTypes',
                payload: getSelectedValues(mealTypeRef)
              })
            }
            id="meal"
            multiple={true}
          >
            <option></option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>
        </div>
        <div className={styles.reciperFilterInput}>
          <label htmlFor="dish">Dish type</label>
          <select
            ref={dishTypeRef}
            onChange={() =>
              dispatch({
                type: 'setDishTypes',
                payload: getSelectedValues(dishTypeRef)
              })
            }
            id="dish"
            multiple={true}
          >
            <option></option>
            <option>Biscuits and cookies</option>
            <option>Bread</option>
            <option>Cereals</option>
            <option>Condiments and sauces</option>
            <option>Desserts</option>
            <option>Drinks</option>
            <option>Main course</option>
            <option>Pancake</option>
            <option>Salad</option>
            <option>Sandwiches</option>
            <option>Side dish</option>
            <option>Soup</option>
            <option>Starter</option>
            <option>Sweets</option>
          </select>
        </div>
        <div className={styles.reciperFilterInput}>
          <label htmlFor="calories">Calories</label>
          <input
            type="text"
            placeholder="ex: 100-300"
            id="calories"
            onChange={e => setCalories(e.target.value)}
          ></input>
        </div>
        <div className={styles.reciperFilterInput}>
          <label htmlFor="random">Random</label>
          <select
            onChange={e =>
              dispatch({ type: 'setRandom', payload: e.target.value })
            }
            id="random"
          >
            <option></option>
            <option>True</option>
            <option>False</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default RecipeFilter

// Filters for the search include number of ingredients,
// diet label, health label, cuisine type, meal type,
// dish type, calories, exclude recipes
// with certain ingredients.
