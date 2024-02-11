import React from 'react'
import {Link} from 'react-router-dom'

function PagesNotFound() {
  return (
    <>
    <h1>404-Page Not Found</h1>
    <Link to='/' className='btn btn-info'> Click to Go to Home Page</Link>
    </>

  )
}

export default PagesNotFound