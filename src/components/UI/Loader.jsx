import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loaderMessage}>Loading...</span>
    </div>
  )
}

export default Loader
