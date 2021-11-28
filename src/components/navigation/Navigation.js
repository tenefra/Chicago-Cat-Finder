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
import logo from "../../images/Logo_V2_05.svg"
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

  const loginClicked = () => {
    appDispatch({ type: "loginClicked" })
  }

  return (
    <>
      <AppBar className="desktop-nav" style={{ backgroundColor: "#FFF" }} position="relative">
        <Toolbar className="desktop-tool">
          <Link to="/">
            <img className="logo" src={logo} alt="Windy Kitty Logo" />
          </Link>
          <ul className="nav-list" style={{ flexGrow: "1" }}>
            <li className="nav-list-item">
              <Link to="/cats">Find A Cat</Link>
            </li>

            <li className="nav-list-item">
              <Link to="/care">Pet Care</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/help">Donate</Link>
            </li>
          </ul>
          <div style={{ borderLeft: "3px solid #B3DDF2", height: "64px", paddingRight: "20px" }}></div>
          {globalState.loggedIn ? (
            <Link to="/favorites">
              <Icon path={mdiHeart} size={1.3} color="#FF0000" />
            </Link>
          ) : (
            <a onClick={loginClicked}>
              <Icon path={mdiHeart} size={1.3} color="#FF0000" />
            </a>
          )}
          <div style={{ borderRight: "3px solid #B3DDF2", height: "64px", paddingLeft: "20px" }}></div>
          <ul className="nav-list">
            {globalState.loggedIn ? null : (
              <li onClick={openSignup} className="nav-list-item">
                Sign Up
              </li>
            )}
            {globalState.loggedIn ? <Login /> : <Logout />}
          </ul>
        </Toolbar>
      </AppBar>
      <nav className="mobile-nav" role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <ul className="nav-list" style={{ flexGrow: "1" }}>
              <li className="nav-list-item">
                <Link to="/cats">Find A Cat</Link>
              </li>

              <li className="nav-list-item">
                <Link to="/care">Pet Care</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/help">Donate</Link>
              </li>
            </ul>
            <div className="mobile-favorite">
              {globalState.loggedIn ? (
                <Link to="/favorites">
                  <Icon path={mdiHeart} size={2} color="#FF0000" />
                </Link>
              ) : (
                <a onClick={loginClicked}>
                  <Icon path={mdiHeart} size={2} color="#FF0000" />
                </a>
              )}
            </div>
            <Link to="/">
              <img className="toggle-logo" src={logo} alt="Windy Kitty Logo" />
            </Link>

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
          </ul>
        </div>
        <Link to="/">
          <img className="logo" src={logo} alt="Windy Kitty Logo" />
        </Link>
      </nav>
    </>
  )
}

export default Navigation
