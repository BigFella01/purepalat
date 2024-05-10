import {
  createContext,
  useContext,
  useReducer,
  // useEffect,
  useState
} from 'react'

const RecipeContext = createContext()

function RecipeProvider({ children }) {
  
  const initialState = {
    numIngredients: '',
    dietLabels: [],
    healthLabels: [],
    cuisineTypes: [],
    mealTypes: [],
    dishTypes: [],
    calories: '',
    isLoading: false,
    random: false
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'setNumIngs':
        return {
          ...state,
          numIngredients: action.payload
        }
      case 'setDietLabels':
        return {
          ...state,
          dietLabels: action.payload
        }
      case 'setHealthLabels':
        return {
          ...state,
          healthLabels: action.payload
        }
      case 'setCuisineTypes':
        return {
          ...state,
          cuisineTypes: action.payload
        }
      case 'setMealTypes':
        return {
          ...state,
          mealTypes: action.payload
        }
      case 'setDishTypes':
        return {
          ...state,
          dishTypes: action.payload
        }
      case 'setRandom':
        return {
          ...state,
          random: action.payload
        }
      default: {
        throw new Error('Action unknown')
      }
    }
  }

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('savedData'))
  )
  const [inspirationData, setInspirationData] = useState()
  const [query, setQuery] = useState('')
  const [calories, setCalories] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isFiltering, setIsFiltering] = useState(false)
  const [
    {
      numIngredients,
      dietLabels,
      healthLabels,
      cuisineTypes,
      mealTypes,
      dishTypes,
      random
    },
    dispatch
  ] = useReducer(reducer, initialState)


  return (
    <RecipeContext.Provider
      value={{
        data,
        setData,
        inspirationData,
        setInspirationData,
        query,
        setQuery,
        calories,
        setCalories,
        isLoading,
        setIsLoading,
        isFiltering,
        setIsFiltering,
        numIngredients,
        dietLabels,
        healthLabels,
        cuisineTypes,
        mealTypes,
        dishTypes,
        random,
        dispatch
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

function useRecipe() {
  const context = useContext(RecipeContext)
  if (context === undefined)
    throw new Error('RecipeContext can only be consumed by its children')
  return context
}

export { RecipeProvider, useRecipe }
