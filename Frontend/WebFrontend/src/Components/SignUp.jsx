// import React from 'react'

import { Link } from "react-router-dom"
import "./Signup.css"
const SignUp = () => {
  return (
    <div>
       <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text"  placeholder="Enter your name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email"  placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password"  placeholder="Enter your password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
         <div className="others"> Have an account yet? <Link className="link" to={'/login'}>Login for free </Link></div>
      </div>
      <div className="image-container">
        <img src="https://static.vecteezy.com/system/resources/previews/003/689/230/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="Signup" />
      </div>
     
     
    </div>
    </div>
  )
}

export default SignUp
