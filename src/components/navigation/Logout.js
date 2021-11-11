import { useContext } from "react"
import { Link } from "react-router-dom"

import DispatchContext from "../../DispatchContext"
import "./navigationStyles.css"

const Logout = () => {
  const appDispatch = useContext(DispatchContext)

  const openLogin = () => {
    appDispatch({ type: "loginClicked" })
  }

  return (
    <li onClick={openLogin} className="nav-list-item">
      Log In
    </li>
  )
}

export default Logout
