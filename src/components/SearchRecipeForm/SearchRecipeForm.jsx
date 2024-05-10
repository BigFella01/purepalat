import { useRecipe } from '../../../contexts/RecipeContext'
import styles from './SearchRecipeForm.module.css'

function SearchRecipeForm({ handleSubmit }) {
  const { query, setQuery, setIsFiltering } = useRecipe()
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Search for a recipe by ingredient"
        className={styles.input}
        onChange={e => setQuery(e.target.value)}
        value={query}
      ></input>
      <div>
        <button type="button"
          onClick={e => {
            setIsFiltering(isFiltering => !isFiltering)
          }}
          className={styles.button}
        >
          FILTER
        </button>

        <button onClick={handleSubmit} className={styles.button}>
          &rarr;
        </button>
      </div>
    </form>
  )
}

export default SearchRecipeForm

// http://localhost:5173/findrecipe/results/