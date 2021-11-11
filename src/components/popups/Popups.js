// This file contains the content for each individual popup module used in this application.
// Here, you can create new popups based on different conditions, or edit existing ones
// To edit the actual popup component itself, refer to PopupComponent.js found in this folder

import React, { useContext } from "react"
import Axios from "axios"

import PopupComponent from "./PopupComponent"
import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function Popups() {
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const createAccountClosed = () => {
    appDispatch({ type: "createAccountClosed" })
  }

  const loginClosed = () => {
    appDispatch({ type: "loginClosed" })
  }

  const handleUsernameChange = e => {
    appDispatch({ type: "inputUsername", value: e.target.value })
  }

  const handleEmailChange = e => {
    appDispatch({ type: "inputEmail", value: e.target.value })
  }

  const handlePasswordChange = e => {
    appDispatch({ type: "inputPassword", value: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("http://localhost:3306/createUser", { username: globalState.username, email: globalState.email, password: globalState.password })

      if (response.data.token) {
        console.log("User was successfully created.")
        appDispatch({ type: "createAccountClosed" })
        appDispatch({ type: "login", data: response.data })
      } else {
        console.log("Incorrect username / password")
        appDispatch({ type: "logout" })
      }
    } catch (e) {
      console.log(e.response)
    }
  }

  async function handleLoginSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("http://localhost:3306/login", { username: globalState.username, password: globalState.password })

      if (response.data.token) {
        console.log("User was successfully logged in.")
        appDispatch({ type: "loginClosed" })
        appDispatch({ type: "login", data: response.data })
      } else {
        console.log("Incorrect username / password")
        appDispatch({ type: "logout" })
      }
    } catch (e) {
      console.log(e.response)
    }
  }

  return (
    <>
      {/* Popup for Sign Up button on nav bar */}
      <PopupComponent trigger={globalState.createAccountClicked}>
        <button onClick={createAccountClosed} className="close-btn">
          Close
        </button>
        <h2 style={{ textAlign: "center" }}>Create Account Popup</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username-register" className="text-muted mb-1">
              <small>Username</small>
            </label>
            <br />
            <input onChange={handleUsernameChange} id="username-register" name="username" className="form-control" type="text" placeholder="Pick a username" autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="email-register" className="text-muted mb-1">
              <small>Email</small>
            </label>
            <br />
            <input onChange={handleEmailChange} id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="password-register" className="text-muted mb-1">
              <small>Password</small>
            </label>
            <br />
            <input onChange={handlePasswordChange} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
          </div>
          <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
            Sign up for Chicago Cat Finder
          </button>
        </form>
      </PopupComponent>
      {/* Popup for Log in button on nav bar */}
      <PopupComponent trigger={globalState.loginClicked}>
        <button onClick={loginClosed} className="close-btn">
          Close
        </button>
        <h2 style={{ textAlign: "center" }}>Login Popup</h2>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="username-register" className="text-muted mb-1">
              <small>Username</small>
            </label>
            <br />
            <input onChange={handleUsernameChange} id="username-register" name="username" className="form-control" type="text" placeholder="Your username" autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="password-register" className="text-muted mb-1">
              <small>Password</small>
            </label>
            <input onChange={handlePasswordChange} id="password-register" name="password" className="form-control" type="password" placeholder="Create a password" />
          </div>
          <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
            Log in
          </button>
        </form>
      </PopupComponent>
    </>
  )
}

export default Popups
