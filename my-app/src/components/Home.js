import React from 'react'
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
    <ul>
      <li>
        <Link to="/Login">Login</Link>
      </li>
      <li>
        <Link to="register">Signup</Link>
      </li>
    </ul>
  </div>
 
  )
}

export default Home