import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './home.module.scss'

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.body__card + ' ' + styles.card}>
          <div className={styles.card__image}>
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/pegoda-6de8a.appspot.com/o/images%2F1646228766637.1914.jpg?alt=media" alt="hinhanh" height={140} /> */}
            <div>1 question</div>
          </div>
          <div className={styles.card__content}>
            <div className={styles.card__title}>
              Enter kahoot title...
            </div>
            <div className={styles.card__footer}>
              <div className={styles['card__footer--left']}>01643815296h@gmail.com</div>
              <div className={styles['card__footer--right']}>
                <div>06-05-2022</div>
                <Button variant='danger'>Delete</Button>
                <Button variant='primary'>Edit</Button>
                <Button variant='success'>Play</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home