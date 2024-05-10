import { Outlet, useNavigate } from 'react-router-dom'

import AppNav from '../../components/AppNav/AppNav'
import SearchRecipeForm from '../../components/SearchRecipeForm/SearchRecipeForm'
import RecipeFilter from '../../components/RecipeFilter/RecipeFilter'
import Footer from '../../components/Footer/Footer'

import styles from './FindRecipe.module.css'
import Loader from '../../components/UI/Loader'
import { useEffect, useState } from 'react'
import { useRecipe } from '../../../contexts/RecipeContext'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

function FindRecipe() {
  const {
    data,
    setData,
    query,
    setQuery,
    setIsFiltering,
    numIngredients,
    dietLabels,
    healthLabels,
    cuisineTypes,
    mealTypes,
    dishTypes,
    calories,
    random,
    isLoading,
    setIsLoading
  } = useRecipe()
  const [errorMsg, setErrorMsg] = useState('')

  const queryFormatted = query ? `&q=${query}` : ''
  const numIngredientsFormatted = numIngredients
    ? `&ingr=ingr%3D${numIngredients}`
    : ''
  const caloriesFormatted = calories ? `&calories=calories%3D${calories}` : ''
  const dietLabelsFormatted =
    dietLabels.length >= 1
      ? dietLabels.map(label => `&diet=${label}`).join('')
      : ''
  const healthLabelsFormatted =
    healthLabels.length >= 1
      ? healthLabels.map(label => `&health=${label}`).join('')
      : ''
  const cuisineTypesFormatted =
    cuisineTypes.length >= 1
      ? cuisineTypes.map(type => `&cuisineType=${type}`).join('')
      : ''
  const mealTypesFormatted =
    mealTypes.length >= 1
      ? mealTypes.map(type => `&mealType=${type}`).join('')
      : ''
  const dishTypesFormatted =
    dishTypes.length >= 1
      ? dishTypes.map(type => `&dishType=${type.replace(' ', '%20')}`).join('')
      : ''
  const randomFormatted = random ? `&random=true` : ''

  const API_ID = 'd3c06edc'
  const API_KEY = '29c49d018ce993992d058d302752f5c2'

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    async function fetchRecipes() {
      if (!query) {
        return setErrorMsg('Please search for a recipe by ingredient!')
      }
      setData([])
      setErrorMsg('')
      setIsLoading(true)
      setIsFiltering(false)
      try {
        const res = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public${queryFormatted}&app_id=${API_ID}&app_key=${API_KEY}${randomFormatted}${numIngredientsFormatted}${dietLabelsFormatted}${healthLabelsFormatted}${cuisineTypesFormatted}${mealTypesFormatted}${dishTypesFormatted}${caloriesFormatted}`
        )
        const fetchedData = await res.json()
        setData([{ query: query, data: fetchedData.hits }, ...data])
      } catch (err) {
        setErrorMsg(`${err.message}`)
      } finally {
        setIsLoading(false)
        navigate(`/findrecipe/results/${query}`)
        setQuery('')
      }
    }
    fetchRecipes()
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('savedData'))
    if (data) setData(data)
  }, [setData])

  useEffect(() => {
    localStorage.setItem('savedData', JSON.stringify(data))
  })

  return (
    <div className={styles.page}>
      <AppNav />
      <SearchRecipeForm handleSubmit={handleSubmit} />
      <RecipeFilter />
      {isLoading && <Loader />}
      {errorMsg && <ErrorMessage message={errorMsg} />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default FindRecipe
