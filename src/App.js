import React, { useState, useReducer, useEffect } from "react"
import { useImmerReducer } from "use-immer"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import Router from "./Router"

import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

import Navigation from "./components/navigation/Navigation"
import Popups from "./components/popups/Popups"
import Search from "./components/search/Search"
import Adoptables from "./components/adoptables/Adoptables"

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
    zipcode: 60601,
    cats: [
      {
        name: "Kittycat",
        catID: 1,
        img: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1829&q=80",
        age: "kitten",
        shelter: "Tree house"
      },
      {
        name: "Whiskers",
        catID: 256,
        img: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        age: "cat",
        shelter: "Harmony house"
      },
      {
        name: "Reginald",
        catID: 3,
        img: "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        age: "kitten",
        shelter: "Tree house"
      },
      {
        name: "Poopy",
        catID: 4,
        img: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1829&q=80",
        age: "kitten",
        shelter: "Tree house"
      },
      {
        name: "Scott",
        catID: 5,
        img: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1829&q=80",
        age: "kitten",
        shelter: "Tree house"
      },
      {
        name: "Milo",
        catID: 6,
        img: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1829&q=80",
        age: "kitten",
        shelter: "Tree house"
      },
      {
        name: "Poopy",
        catID: 7,
        img: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1829&q=80",
        age: "kitten",
        shelter: "Tree house"
      },
      {
        name: "Kittycat",
        catID: 8,
        img: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1829&q=80",
        age: "kitten",
        shelter: "Tree house"
      },
      {
        name: "Whiskers",
        catID: 9,
        img: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        age: "cat",
        shelter: "Harmony house"
      },
      {
        name: "Reginald",
        catID: 10,
        img: "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        age: "kitten",
        shelter: "Tree house"
      }
    ],
    favorites: [],
    createAccountClicked: false,
    loginClicked: false
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
      case "createAccountClosed":
        draft.createAccountClicked = false
        return
      case "loginClosed":
        draft.loginClicked = false
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
      case "addToFavorites":
        draft.favorites.push(action.value)
        return
      case "removeFromFavorites":
        draft.favorites.splice(action.value, 1)
        return
      case "updateFavorites":
        draft.favorites = action.data
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

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Navigation />
          <Router />
          <Popups />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
