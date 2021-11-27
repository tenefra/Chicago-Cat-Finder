import React, { useEffect } from "react"
import { useImmerReducer } from "use-immer"
import { BrowserRouter } from "react-router-dom"

import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import Main from "./components/main/Main"

import "./App.css"

function App() {
  const initialState = {
    username: null,
    email: null,
    password: null,
    user: {
      token: localStorage.getItem("storedToken"),
      username: localStorage.getItem("storedUsername"),
      email: localStorage.getItem("storedEmail"),
      id: localStorage.getItem("storedId")
    },
    loggedIn: Boolean(localStorage.getItem("storedToken")),
    zipcode: 60618,
    cats: [],
    currentCat: null,
    favorites: [],
    createAccountClicked: false,
    loginClicked: false,
    contactClicked: false
  }

  const ourReducer = (draft, action) => {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "logout":
        draft.loggedIn = false
        draft.user = null
        draft.favorites = []
        return
      case "createAccountClicked":
        draft.createAccountClicked = true
        return
      case "loginClicked":
        draft.loginClicked = true
        return
      case "contactClicked":
        draft.contactClicked = true
        return
      case "createAccountClosed":
        draft.createAccountClicked = false
        return
      case "loginClosed":
        draft.loginClicked = false
        return
      case "contactClosed":
        draft.contactClicked = false
        return
      case "inputUsername":
        draft.username = action.value
        return
      case "inputEmail":
        draft.email = action.value
        return
      case "inputPassword":
        draft.password = action.value
        return
      case "displayResults":
        draft.cats.push(action.value)
        return
      case "updateZipcode":
        draft.zipcode = action.value
        return
      case "updateCats":
        draft.cats = action.data
        return
      case "removeCats":
        draft.cats = []
        return
      case "updateCurrentCat":
        draft.currentCat = action.data
        return
      case "addToFavorites":
        draft.favorites.push(action.value)
        return
      case "removeFromFavorites":
        draft.favorites.splice(action.value, 1)
        return
      case "updateFavorites":
        draft.favorites = action.data
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("storedToken", state.user.token)
      localStorage.setItem("storedUsername", state.user.username)
      localStorage.setItem("storedEmail", state.user.email)
      localStorage.setItem("storedId", state.user.id)
    } else {
      localStorage.removeItem("storedToken")
      localStorage.removeItem("storedUsername")
      localStorage.removeItem("storedEmail")
      localStorage.removeItem("storedId")
    }
  }, [state.loggedIn])

  useEffect(() => {
    localStorage.setItem("storedZip", state.zipcode)
  }, [state.zipcode])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
