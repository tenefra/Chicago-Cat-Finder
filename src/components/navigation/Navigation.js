import React, { useContext } from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import cookie from "cookie"
import { createTheme } from "@material-ui/core/styles"
import Icon from "@mdi/react"
import { mdiHeart } from "@mdi/js"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

import Login from "./Login"
import Logout from "./Logout"
import "./navigationStyles.css"

const theme = createTheme({
  palette: {
    primary: {
      light: "#a47fc7",
      main: "#745296",
      dark: "#462868",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
})

const Navigation = () => {
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const openSignup = () => {
    appDispatch({ type: "createAccountClicked" })
  }

  return (
    <>
      <AppBar style={{ backgroundColor: theme.palette.primary.main, padding: "0 110px" }} position="relative">
        <Toolbar>
          <Link to="/">
            <Typography style={{ textDecoration: "none", color: "#FFF" }} variant="h6">
              Chicago Cat Finder
            </Typography>
          </Link>
          <ul className="nav-list" style={{ flexGrow: "1" }}>
            <li className="nav-list-item">
              <Link to="/cats">Find a cat</Link>
            </li>

            <li className="nav-list-item">
              <Link to="/care">Learn some tricks</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/help">How to help</Link>
            </li>
          </ul>
          <div style={{ borderLeft: "3px solid #462868", height: "64px", paddingRight: "20px" }}></div>
          <Link to="/favorites">
            <Icon path={mdiHeart} size={1.3} color="white" />
          </Link>
          <div style={{ borderRight: "3px solid #462868", height: "64px", paddingLeft: "20px" }}></div>
          <ul className="nav-list">
            {globalState.loggedIn ? (
              <li className="nav-list-item">
                <Link to="/signup">Your Account</Link>
              </li>
            ) : (
              <li onClick={openSignup} className="nav-list-item">
                Sign Up
              </li>
            )}
            {globalState.loggedIn ? <Login /> : <Logout />}
          </ul>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navigation
