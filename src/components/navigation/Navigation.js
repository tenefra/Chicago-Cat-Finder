import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import cookie from "cookie"
import { createTheme } from "@material-ui/core/styles"
import Icon from "@mdi/react"
import { mdiHeart } from "@mdi/js"

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
  return (
    <>
      <AppBar style={{ backgroundColor: theme.palette.primary.main, padding: "0 110px" }} position="relative">
        <Toolbar>
          <Typography variant="h6">Chicago Cat Finder</Typography>
          <ul className="nav-list" style={{ flexGrow: "1" }}>
            <li className="nav-list-item">
              <Link to="/">Find a cat</Link>
            </li>

            <li className="nav-list-item">
              <Link to="/care">Learn some tricks</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/help">How to help</Link>
            </li>
          </ul>
          <div style={{ borderLeft: "3px solid #462868", height: "64px", paddingRight: "20px" }}></div>
          <Icon path={mdiHeart} size={1.2} color="white" />
          <div style={{ borderRight: "3px solid #462868", height: "64px", paddingLeft: "20px" }}></div>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/signup">Sign Up</Link>
            </li>

            <li className="nav-list-item">
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navigation
