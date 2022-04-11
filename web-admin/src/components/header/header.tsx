import React from 'react'
import styles from './header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <span>Kahoot!</span>
    </div>
  )
}

export default Header