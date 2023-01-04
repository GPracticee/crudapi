import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <div>
            <div>
                <h1>404</h1>
                <h2>Sorry page not found</h2>
                <button type="button" class="btn btn-primary"><NavLink to="/">Back to HomePage</NavLink></button>   
            </div>
        </div>
    </>
  )
}

export default ErrorPage