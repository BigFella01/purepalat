import { useState } from 'react'
import AppNav from '../../components/AppNav/AppNav'
import Footer from '../../components/Footer/Footer'

import styles from './Homepage.module.css'
import HomepageMainContent from '../../components/HomepageMainContent/HomepageMainContent'


function Homepage() {

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
  return (
    <div className={styles.page}>
      <AppNav setMobileNavIsOpen={setMobileNavIsOpen}/>
      <HomepageMainContent />
      <Footer />
    </div>
  )
}

export default Homepage
