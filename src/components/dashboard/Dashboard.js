import React from "react"

import Search from "../search/Search"
import Adoptables from "../adoptables/Adoptables"
import SearchResults from "../searchResults/SearchResults"

function Dashboard() {
  return (
    <>
      <Search />
      <Adoptables />
    </>
  )
}

export default Dashboard
