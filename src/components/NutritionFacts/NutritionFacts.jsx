import styles from './NutritionFacts.module.scss'

const recFatIntake = 80
const recSatFatIntake = 20
const recCholestorolIntake = 300
const recSodiumIntake = 2300
const recCarbIntake = 275
const recFiberIntake = 28

function NutritionFacts({ recipe }) {
  return (
    <section className={styles.performanceFacts}>
      <header className={styles.performanceFactsHeader}>
        <h1 className={styles.performanceFactsTitle}>Nutrition Facts</h1>
        <p>Serving Size whole recipe</p>
      </header>
      <table className={styles.performanceFactsTable}>
        <thead>
          <tr>
            <th colSpan="3" className={styles.smallInfo}>
              Amount Per Serving
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2">
              <b>Calories</b>
              {Math.round(recipe.calories)}
            </th>
            <td>
              Calories from Fat
              {Math.round(recipe.totalNutrients.FAT.quantity) * 9}
            </td>
          </tr>
          <tr className={styles.thickRow}>
            <td colSpan="3" className={styles.smallInfo}>
              <b>% Daily Value*</b>
            </td>
          </tr>
          <tr>
            <th colSpan="2">
              <b>Total Fat</b>
              {`${Math.round(recipe.totalNutrients.FAT.quantity)}g`}
            </th>
            <td>
              <b>{`${Math.floor(
                (recipe.totalNutrients.FAT.quantity / recFatIntake) * 100
              )}%`}</b>
            </td>
          </tr>
          <tr>
            <td className={styles.blankCell}></td>
            <th>
              <b>Saturated Fat</b>
              {`${Math.round(recipe.totalNutrients.FASAT?.quantity)}g`}
            </th>
            <td>
              <b>{`${Math.floor(
                (recipe.totalNutrients.FASAT.quantity / recSatFatIntake) * 100
              )}%`}</b>
            </td>
          </tr>
          <tr>
            <th colSpan="2">
              <b>Cholesterol</b>
              {`${Math.round(recipe.totalNutrients.CHOLE.quantity)}mg`}
            </th>
            <td>
              <b>{`${Math.floor(
                (recipe.totalNutrients.CHOLE.quantity / recCholestorolIntake) *
                  100
              )}%`}</b>
            </td>
          </tr>
          <tr>
            <th colSpan="2">
              <b>Sodium</b>
              {`${Math.round(recipe.totalNutrients.NA.quantity)}mg`}
            </th>
            <td>
              <b>{`${Math.floor(
                (recipe.totalNutrients.NA.quantity / recSodiumIntake) * 100
              )}%`}</b>
            </td>
          </tr>
          <tr>
            <th colSpan="2">
              <b>Total Carbohydrate</b>
              {`${Math.round(recipe.totalNutrients.CHOCDF.quantity)}g`}
            </th>
            <td>
              <b>{`${Math.floor(
                (recipe.totalNutrients.CHOCDF.quantity / recCarbIntake) * 100
              )}%`}</b>
            </td>
          </tr>
          <tr>
            <td className={styles.blankCell}></td>
            <th>
              Dietary Fiber{' '}
              {`${Math.round(recipe.totalNutrients.FIBTG.quantity)}g`}
            </th>
            <td>
              <b>{`${Math.floor(
                (recipe.totalNutrients.FIBTG.quantity / recFiberIntake) * 100
              )}%`}</b>
            </td>
          </tr>
          <tr>
            <td className={styles.blankCell}></td>
            <th>
              Sugars {`${Math.round(recipe.totalNutrients.SUGAR.quantity)}g`}
            </th>
            <td></td>
          </tr>
          <tr className={styles.thickEnd}>
            <th colSpan="2">
              <b>Protein</b>
              {`${Math.round(recipe.totalNutrients.PROCNT.quantity)}g`}
            </th>
            <td></td>
          </tr>
        </tbody>
      </table>

      <table className={styles.performanceFactsTableGrid}>
        <tbody>
          <tr>
            <td colSpan="2">
              Vitamin A {`${Math.round(recipe.totalDaily.VITA_RAE.quantity)}%`}
            </td>
            <td>
              Vitamin C {`${Math.round(recipe.totalDaily.VITC.quantity)}%`}
            </td>
          </tr>
          <tr className="thin-end">
            <td colSpan="2">
              Calcium {`${Math.round(recipe.totalDaily.CA.quantity)}%`}
            </td>
            <td>Iron {`${Math.round(recipe.totalDaily.FE.quantity)}%`}</td>
          </tr>
        </tbody>
      </table>

      <p className={styles.smallInfo}>
        * Percent Daily Values are based on a 2,000 calorie diet. Your daily
        values may be higher or lower depending on your calorie needs:
      </p>

      <table
        className={`${styles.performanceFactsTableSmall} ${styles.smallInfo}`}
      >
        <thead>
          <tr>
            <td colSpan="2"></td>
            <th>Calories:</th>
            <th>2,000</th>
            <th>2,500</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2">Total Fat</th>
            <td>Less than</td>
            <td>65g</td>
            <td>80g</td>
          </tr>
          <tr>
            <td className={styles.blankCell}></td>
            <th>Saturated Fat</th>
            <td>Less than</td>
            <td>20g</td>
            <td>25g</td>
          </tr>
          <tr>
            <th colSpan="2">Cholesterol</th>
            <td>Less than</td>
            <td>300mg</td>
            <td>300 mg</td>
          </tr>
          <tr>
            <th colSpan="2">Sodium</th>
            <td>Less than</td>
            <td>2,400mg</td>
            <td>2,400mg</td>
          </tr>
          <tr>
            <th colSpan="3">Total Carbohydrate</th>
            <td>300g</td>
            <td>375g</td>
          </tr>
          <tr>
            <td className="blank-cell"></td>
            <th colSpan="2">Dietary Fiber</th>
            <td>25g</td>
            <td>30g</td>
          </tr>
        </tbody>
      </table>

      <p className={styles.smallInfo}>Calories per gram:</p>
      <p className={`${styles.smallInfo} ${styles.textCenter}`}>
        Fat 9 &bull; Carbohydrate 4 &bull; Protein 4
      </p>
    </section>
  )
}

export default NutritionFacts
