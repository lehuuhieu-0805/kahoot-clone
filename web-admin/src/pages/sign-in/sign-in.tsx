import React from 'react'
import styles from './sign-in.module.scss'

const SignIn: React.FC = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.content__card + ' ' + styles.card}>
          <div className={styles.card__title}>Sign In</div>
          <form>
            <div className='mb-3'>
              <label htmlFor='InputEmail' className="form-label">Email</label>
              <input type="email" className='form-control' id="InputEmail" />
            </div>
            <div className='mb-3'>
              <label htmlFor='InputPassword' className="form-label">Password</label>
              <input type="password" className='form-control' id="InputPassword" />
            </div>
            <p>
              Forgot password?&nbsp;
              <a href='#'>Reset your password</a>
            </p>
            <button type='submit' className='btn btn-primary'>Sign In</button>
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
            Don't have an account?&nbsp;
            <a href="/sign-up">Sign Up</a>
          </span>
        </div>
      </div>
    </>
  )
}

export default SignIn