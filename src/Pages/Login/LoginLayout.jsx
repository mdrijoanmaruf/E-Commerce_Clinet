import React from 'react'
import Login from './Login'
import Register from './Register'

const LoginLayout = () => {
  return (
    <div>
        <div>
            <Login></Login>
            <Register></Register>
            <div>
                Continue with google
            </div>
        </div>
    </div>
  )
}

export default LoginLayout