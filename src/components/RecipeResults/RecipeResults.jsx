import styles from './RecipeResults.module.css'

import RecipeResultsInfo from './RecipeResultsInfo'
import { useParams } from 'react-router-dom'
import { useRecipe } from '../../../contexts/RecipeContext'
import RecipePreview from '../RecipePreview/RecipePreview'
// import { v4 as uuidv4 } from 'uuid';

function RecipeResults() {
  const { data } = useRecipe()
  const { query } = useParams()

  if (data.length)
    return (
      <>
        <RecipeResultsInfo data={data} query={query} />
        <div className={styles.previewResultsContainer}>
          {data
            .find(data => data.query === query)
            .data.map(result => (
              <RecipePreview
                result={result}
                key={result.recipe.calories}
                query={query}
                id={result._links.self.href.substr(38, 32)}
              />
            ))}
        </div>
      </>
    )
}

export default RecipeResults

// Grab query from url, and use it find the data from localStorage
// that has the same query. This way, the content on the screen
// will always match the query in the url

// http://localhost:5173/findrecipe/results/
