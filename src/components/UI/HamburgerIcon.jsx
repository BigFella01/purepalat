import styles from './HamburgerIcon.module.css'

function HamburgerIcon({
  size,
  strokeColor,
  setIsHovering,
  setMobileNavVisible
}) {
  return (
    <svg
      className={styles.icon}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setMobileNavVisible(mobileNavVisible => !mobileNavVisible)}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M4 18L20 18"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />{' '}
        <path
          d="M4 12L20 12"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />{' '}
        <path
          d="M4 6L20 6"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export default HamburgerIcon
