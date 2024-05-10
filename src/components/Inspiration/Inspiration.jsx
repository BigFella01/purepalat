import RecipePreview from '../RecipePreview/RecipePreview'
import styles from './Inspiration.module.css'

function Inspiration({ data }) {
  return (
    <div>
      <h3 className={styles.inspirationSectionTitle}>Looking for starter ideas?</h3>
      <div className={styles.previewResultsContainer}>
        {data.map(result => (
          <RecipePreview
            result={result}
            key={Math.random()
              .toString(36)
              .substring(2, 9)}
          />
        ))}
      </div>
    </div>
  )
}

export default Inspiration
