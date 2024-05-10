import styles from './RecipeResultsInfo.module.css'


function RecipeResultsInfo({ data, id, query }) {
  
  return (
    <div>
      <h3 className={styles.numResults}>{data[0].data.length} results for "{query}"</h3>
      <p className={styles.disclosure}>
        NOTE: Nutrition information is measured in grams per serving
      </p>
    </div>
  )
}

export default RecipeResultsInfo
