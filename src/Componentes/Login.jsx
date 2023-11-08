import React from 'react'
import { Link } from 'react-router-dom';


export const Login = () => {
  return (
    <div>Login
        <h1>Login anda</h1>


        <Link to="/Home">
            <button>Avanzar sin loguearse</button>
      </Link>
    </div>
  )
}
