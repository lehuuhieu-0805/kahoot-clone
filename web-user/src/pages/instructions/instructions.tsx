import React from 'react'
import styles from './instructions.module.scss'

const Instructions: React.FC = () => {
  return (
    <div>
      <div className={styles.body}>
        <div className={styles.body__title}>You're in</div>
        <div className={styles['body__sub-title']}>See your nickname on screen?</div>
      </div>
      <div className={styles.footer}>
        <div>Hieu</div>
      </div>
    </div>
  )
}

export default Instructions