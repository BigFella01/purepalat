
import { useParams } from 'react-router-dom'
import styles from './RecipeDetails.module.css'
import { useEffect, useState } from 'react'
import ExtraNutritionFacts from '../ExtraNutritionFacts/ExtraNutritionFacts'
import NutritionFacts from '../NutritionFacts/NutritionFacts'

const API_ID = 'd3c06edc'
const API_KEY = '29c49d018ce993992d058d302752f5c2'

function RecipeDetails() {
  const { id } = useParams()
  const [currentRecipe, setCurrentRecipe] = useState({})

  useEffect(() => {
    async function fetchCurrentRecipe() {
      setCurrentRecipe({})
      try {
        const res = await fetch(
          `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${API_ID}&app_key=${API_KEY}`
        )
        const fetchedData = await res.json()
        console.log(fetchedData)
        setCurrentRecipe(fetchedData)
      } catch (err) {
        console.error(err)
      }
    }
    fetchCurrentRecipe()
  }, [id])

  if (currentRecipe.recipe)
    return (
      <div className={styles.detailsContainer}>
        <h3 className={styles.title}>{currentRecipe.recipe.label}</h3>
        <div className={styles.recipeContainer}>
          <img src={currentRecipe.recipe.image} alt="dish"></img>
          <ul className={styles.ingredientList}>
            {currentRecipe.recipe.ingredientLines.map(line => (
              <li className={styles.ingredient} key={line}>
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.infoFlex}>
          <NutritionFacts recipe={currentRecipe.recipe} />
          <ExtraNutritionFacts
            nutrients={currentRecipe.recipe.totalNutrients}
          />
        </div>
      </div>
    )
}

export default RecipeDetails
