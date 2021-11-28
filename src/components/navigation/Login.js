import React from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"

import DispatchContext from "../../DispatchContext"

import "./navigationStyles.css"

const Login = () => {
  const appDispatch = useContext(DispatchContext)

  const handleLogout = () => {
    appDispatch({ type: "logout" })
  }
  return (
    <li onClick={handleLogout} className="nav-list-item">
      <Link to="/">Logout</Link>
    </li>
  )
}

export default Login
