import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import Router from "./Router"

import Navigation from "./components/navigation/Navigation"
import Search from "./components/search/Search"
import Adoptables from "./components/adoptables/Adoptables"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>

    // <Navigation />
    // <Search />
    // <Adoptables />
  )
}

export default App
