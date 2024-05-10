import { useState } from 'react'
import styles from './RecipeBuilder.module.css'

import ExtraNutritionFacts from '../ExtraNutritionFacts/ExtraNutritionFacts'

import NutritionFacts from '../NutritionFacts/NutritionFacts'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Loader from '../UI/Loader'

const APP_ID = '17c53e83'
const APP_KEY = '12838b4b0890b16060ea25250603098e'

function RecipeBuilder() {
  //   const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [title, setTitle] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()

  async function fetchNutritionData() {
    if (!ingredients || ingredients[0] === "")
      return setErrorMsg('Please enter ingredients to be analyzed!')
    setData()
    setErrorMsg('')
    setIsLoading(true)
    try {
      const res = await fetch(
        `https://api.edamam.com/api/nutrition-details?app_id=${APP_ID}&app_key=${APP_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: 'proto',
            ingr: ingredients
          })
        }
      )
      const data = await res.json()
      console.log(data)
      setData(data)
    } catch (err) {
      setErrorMsg(`${err.message}`)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <div className={styles.recipeBuilder}>
        <label htmlFor="ingredientList">
          Enter an ingredient list, like
          <span className={styles.emphasis}>"3 eggs, 1oz cheddar cheese"</span>,
          etc. Enter each ingredient on a new line.
        </label>
        <textarea
          className={styles.ingredientList}
          id="ingredientList"
          rows="10"
          cols="30"
          onChange={e => setIngredients(e.target.value.split(/\r?\n/))}
        ></textarea>
        <button onClick={fetchNutritionData} className={styles.btn}>
          Analyze
        </button>
        {errorMsg && <ErrorMessage message={errorMsg} />}
      </div>
      {isLoading && <Loader />}
      {data && (
        <div className={styles.infoFlex}>
          <NutritionFacts recipe={data} />
          <ExtraNutritionFacts nutrients={data.totalNutrients} />
        </div>
      )}
    </>
  )
}

export default RecipeBuilder
