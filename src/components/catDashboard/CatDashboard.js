import React from "react"
import SearchResults from "../searchResults/SearchResults"

import "./catDashboardStyles.css"

function CatDashboard(props) {
  const requestCats = props.requestCats

  return (
    <main className="dashboard">
      <SearchResults requestCats={requestCats} />
    </main>
  )
}

export default CatDashboard
