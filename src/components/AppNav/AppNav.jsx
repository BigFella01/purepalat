import { NavLink } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import styles from './AppNav.module.css'
import HamburgerIcon from '../UI/HamburgerIcon'

function AppNav({ setMobileNavIsOpen }) {
  const [isHovering, setIsHovering] = useState(false)
  const [mobileNavVisible, setMobileNavVisible] = useState(false)
  const mobileNav = useRef(null)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 600) setMobileNavVisible(false)
    }
    window.addEventListener('resize', handleResize)

    return function() {
      window.removeEventListener('resize', handleResize)
    }
  })

  useEffect(() => {
    function handleClick(e) {
      if (
        mobileNav.current &&
        mobileNavVisible &&
        !mobileNav.current.contains(e.target)
      ) {
        setMobileNavVisible(false)
      }
    }
    document.body.addEventListener('mousedown', handleClick)

    return function() {
      window.removeEventListener('mousedown', handleClick)
    }
  })

  const strokeColor = isHovering ? '#FFA500' : '#FFFFFF'
  const isShowingClass = mobileNavVisible ? '' : styles.hidden

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.flexNav}>
          <li className={styles.logo}>
            <NavLink to="/" className={styles.navLink}>
              PurePalate
            </NavLink>
          </li>
          <div className={styles.navRight}>
            <ul className={styles.navRightList}>
              <li>
                <NavLink to="/findrecipe" className={styles.navLink}>
                  Find Recipe
                </NavLink>
              </li>
              <li>
                <NavLink to="/fooddata" className={styles.navLink}>
                  Food Data
                </NavLink>
              </li>
            </ul>
            <HamburgerIcon
              strokeColor={strokeColor}
              size={40}
              setIsHovering={setIsHovering}
              setMobileNavVisible={setMobileNavVisible}
            />
          </div>
        </ul>
      </nav>
      <ul
        className={`${styles.navSlideOutList} ${isShowingClass}`}
        ref={mobileNav}
      >
        <li>
          <NavLink to="/findrecipe" className={styles.navLink}>
            Find Recipe
          </NavLink>
        </li>
        <li>
          <NavLink to="/makerecipe" className={styles.navLink}>
            Make Recipe
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default AppNav
