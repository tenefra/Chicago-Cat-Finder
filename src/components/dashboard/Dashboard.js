import React from "react"

import Search from "../search/Search"
import Adoptables from "../adoptables/Adoptables"

function Dashboard(props) {
  const requestCats = props.requestCats

  return (
    <>
      <Search requestCats={requestCats} />
      <Adoptables />
    </>
  )
}

export default Dashboard
