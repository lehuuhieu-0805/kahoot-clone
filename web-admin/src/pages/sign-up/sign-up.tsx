import React from 'react'
import styles from './sign-up.module.scss'

const SignUp: React.FC = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.content__card + ' ' + styles.card}>
          <div className={styles.card__title}>Sign Up with Your Email</div>
          <form>
            <div className='mb-3'>
              <label htmlFor='InputEmail' className="form-label">Email</label>
              <input type="email" className='form-control' id="InputEmail" />
            </div>
            <div className='mb-3'>
              <label htmlFor='InputPassword' className="form-label">Password</label>
              <input type="password" className='form-control' id="InputPassword" />
            </div>
            <div className='mb-3'>
              <label htmlFor='InputConfirmPassword' className="form-label">Confirm Password</label>
              <input type="password" className='form-control' id="InputConfirmPassword" />
            </div>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
          </form>
          <hr />
          <button className='btn'>
            <div className='fa-brands fa-google'></div>
            <div>Continue with Google</div>
          </button>
          <button className="btn">
            <div className='fa-brands fa-facebook-f'></div>
            <div>Continue with Facebook</div>
          </button>
          <span>
            Already have an account?&nbsp;
            <a href="/sign-in">Sign In</a>
          </span>
        </div>
      </div>
    </>
  )
}

export default SignUp