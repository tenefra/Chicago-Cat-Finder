// This file contains the content for each individual popup module used in this application.
// Here, you can create new popups based on different conditions, or edit existing ones
// To edit the actual popup component itself, refer to PopupComponent.js found in this folder

import React, { useContext } from "react"
import Axios from "axios"
import Icon from "@mdi/react"
import { mdiCloseBox } from "@mdi/js"

import PopupComponent from "./PopupComponent"
import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"
import logo from "../../images/Logo_V2_05.svg"

function Popups() {
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const createAccountClosed = () => {
    appDispatch({ type: "createAccountClosed" })
  }

  const loginClosed = () => {
    appDispatch({ type: "loginClosed" })
  }

  const contactClosed = () => {
    appDispatch({ type: "contactClosed" })
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
      const response = await Axios.post("https://young-fortress-07940.herokuapp.com/users", { username: globalState.username, email: globalState.email, password: globalState.password })

      if (response.data.token) {
        appDispatch({ type: "createAccountClosed" })
        appDispatch({ type: "login", data: response.data })
      } else {
        appDispatch({ type: "logout" })
      }
    } catch (e) {
      console.log(e.response)
    }
  }

  async function handleLoginSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("https://young-fortress-07940.herokuapp.com/login", { username: globalState.username, password: globalState.password })

      if (response.data.token) {
        appDispatch({ type: "loginClosed" })
        appDispatch({ type: "login", data: response.data })
      } else {
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
        <Icon onClick={createAccountClosed} className="close-btn" path={mdiCloseBox} size={2} color="#b3ddf2" />
        <img className="logo" src={logo} alt="Windy Kitty Logo" />
        <h2 className="popup-header" style={{ textAlign: "center" }}>
          Create Account
        </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username-register" className="text-muted form-label mb-1">
              <small>Username</small>
            </label>

            <input onChange={handleUsernameChange} id="username-register" name="username" className="form-control form-input" type="text" placeholder="Pick a username" autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="email-register" className="text-muted form-label mb-1">
              <small>Email</small>
            </label>

            <input onChange={handleEmailChange} id="email-register" name="email" className="form-control form-input" type="text" placeholder="you@example.com" autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="password-register" className="text-muted form-label mb-1">
              <small>Password</small>
            </label>

            <input onChange={handlePasswordChange} id="password-register" name="password" className="form-control form-input" type="password" placeholder="Create a password" />
          </div>
          <button type="submit" className="form-submit-btn">
            Sign Up
          </button>
        </form>
      </PopupComponent>
      {/* Popup for Log in button on nav bar */}
      <PopupComponent trigger={globalState.loginClicked}>
        <Icon onClick={loginClosed} className="close-btn" path={mdiCloseBox} size={2} color="#b3ddf2" />
        <img className="logo" src={logo} alt="Windy Kitty Logo" />
        <h2 className="popup-header" style={{ textAlign: "center" }}>
          Log In
        </h2>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="username-register" className="text-muted form-label mb-1">
              <small>Username</small>
            </label>
            <input onChange={handleUsernameChange} id="username-register" name="username" className="form-control form-input" type="text" placeholder="Your username" autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="password-register" className="text-muted form-label mb-1">
              <small>Password</small>
            </label>
            <input onChange={handlePasswordChange} id="password-register" name="password" className="form-control form-input" type="password" placeholder="*********" />
          </div>
          <button type="submit" className="form-submit-btn">
            Log In
          </button>
        </form>
      </PopupComponent>
      {/* Popup for Contact Shelter on cat page */}
      {globalState.currentCat !== null ? (
        <PopupComponent trigger={globalState.contactClicked}>
          <Icon onClick={contactClosed} className="close-btn" path={mdiCloseBox} size={2} color="#b3ddf2" />
          <h2 className="popup-header" style={{ textAlign: "center" }}>
            Contact
          </h2>
          <p className="cat-contact">Email: {globalState.currentCat.contact.email}</p>
          <p className="cat-contact">Phone: {globalState.currentCat.contact.phone}</p>
          <p className="cat-contact">
            {globalState.currentCat.contact.address.address1} <br />
            {globalState.currentCat.contact.address.city} {globalState.currentCat.contact.address.state}, {globalState.currentCat.contact.address.postcode}
          </p>
        </PopupComponent>
      ) : null}
    </>
  )
}

export default Popups
