import Dashboard from "./components/dashboard/Dashboard"
import Care from "./components/resources/Care"
import Help from "./components/resources/Help"
import CatDashboard from "./components/catDashboard/CatDashboard"
import Favorites from "./components/favorites/Favorites"
import CatPage from "./components/catPage/CatPage"

import React from "react"
import { Switch, Route, Redirect } from "react-router"
// import cookie from "cookie"

// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie)
//   return cookies["loggedIn"] ? true : false
// }

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return <Route {...rest} render={props => (checkAuth() ? <Component {...props} /> : <Redirect to="/" />)} />
// }

const Router = props => {
  const requestCats = props.requestCats
  const fetchFavorites = props.fetchFavorites

  return (
    <Switch>
      {/* <ProtectedRoute path="/addlisting" component={AddListingContainer} /> */}
      <Route path="/care">
        <Care />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/cats">
        <CatDashboard requestCats={requestCats} />
      </Route>
      <Route path="/cat/:id">
        <CatPage />
      </Route>
      <Route path="/favorites">
        <Favorites fetchFavorites={fetchFavorites} />
      </Route>
      <Route path="/">
        <Dashboard requestCats={requestCats} />
      </Route>
    </Switch>
  )
}

export default Router
