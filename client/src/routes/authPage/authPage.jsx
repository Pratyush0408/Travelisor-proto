import { useState } from 'react'
import Imager from '../../components/image/imager'
import './authPage.css'
const AuthPage = () => {
  const [isRegister ,setIsRegister] =useState(false);
  const [error ,setError] =useState("");
  return (
    <div className='authPage'>
      <div className="authContainer">
        <Imager src="/general/logo.png" alt=""/>
        <h1>{isRegister ? "Create an account" :"Login to  your account"}</h1>
        {isRegister ? (
          <form key="register">
          <div className="formGroup">
            <label htmlFor="username">Username</label>
            <input type='username' placeholder='Username' required name='username' id='username'/>
          </div>
          <div className="formGroup">
            <label htmlFor="displayName">Name</label>
            <input type='displayName' placeholder='Name' required name='displayName' id='displayName'/>
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type='email' placeholder='email' required name='email' id='email'/>
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type='password' placeholder='password' required name='password' id='password'/>
          </div>
          <button type='submit'>Register</button>
          <p onClick={()=> setIsRegister(false)}>
            Already have an account?<b>Login</b>
            </p>
          {error && <p className='error'>{error}</p>}
        </form>
        ) : (
          <form key="login"> 
          {/* to prevent one text from going to other form */}
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type='email' placeholder='email' required name='email' id='email'/>
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input type='password' placeholder='password' required name='password' id='password'/>
          </div>
          <button type='submit'>Login</button>
          <p onClick={()=> setIsRegister(true)}>
            Don&apos;t have an account?<b>Register</b>
            </p>
          {error && <p className='error'>{error}</p>}
        </form>
        )}
      </div>
    </div>
  )
}

export default AuthPage