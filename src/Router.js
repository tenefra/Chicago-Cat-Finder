import Dashboard from "./components/dashboard/Dashboard"
import Care from "./components/resources/Care"
import Help from "./components/resources/Help"

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

const Router = () => {
  return (
    <Switch>
      {/* <ProtectedRoute path="/addlisting" component={AddListingContainer} /> */}
      <Route path="/care">
        <Care />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  )
}

export default Router
