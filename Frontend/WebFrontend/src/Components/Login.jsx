// import React from 'react'

import { Link } from "react-router-dom"
import "./Signup.css"
const Login = () => {
  return (
    <div>
       <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form>
         
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="others">Don’t have an account yet? <Link className="link" to={'/'}>Signup for free </Link></div>
      </div>
      <div className="image-container">
        <img src="https://static.vecteezy.com/system/resources/previews/003/689/230/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="Signup" />
      </div>
    </div>
    </div>
  )
}

export default Login
