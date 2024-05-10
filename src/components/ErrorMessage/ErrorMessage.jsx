import styles from './ErrorMessage.module.css'

function ErrorMessage({ message }) {
  return (
    <div className={styles.messageContainer}>
      <span className={styles.message}>{message}</span>
    </div>
  )
}

export default ErrorMessage
