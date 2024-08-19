import icon from '../../assets/twitter-logo.png'
import './Login.css'

export const Login = () => {
  return (
    <div className='login-container'>
        <div className='icon'>
            <img src={icon} alt="" />
        </div>
        <div className='login-header'>
            <h1>Log in to Twitter</h1>
        </div>
        <div className='login-form'>
            <input type="text" name="" id="username" placeholder='Email Adress' />
            <input type="text" name="" id="password" 
            placeholder='Password'/>
        </div>
        <div className='login-btn'>
        <button>Log In</button>
        </div>
        <div className='auth-links'>
            <a href="#forgot-password">Forgot password?</a>
            <a href="#sign-up">Sign up to Twitter</a>
        </div>
    </div>
  )
}
