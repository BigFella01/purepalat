import AppNav from '../../components/AppNav/AppNav'
import Footer from '../../components/Footer/Footer'
import styles from './Login.module.css'

function Login() {
  return (
    <div className={styles.page}>
      <AppNav />
      <div className={styles.form}>
        <h3>Log in to see your recipes!</h3>
        <form action="submit">
          <label htmlFor="user">Username:</label>
          <input type="text" id="user" name="user"></input>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" name="password"></input>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login
