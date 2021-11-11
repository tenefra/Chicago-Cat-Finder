import React, { useEffect } from "react"
import SearchResults from "../searchResults/SearchResults"
import CatSidebar from "../catSidebar/CatSidebar"

import "./catDashboardStyles.css"

function CatDashboard() {
  return (
    <main className="dashboard">
      <CatSidebar />
      <SearchResults />
    </main>
  )
}

export default CatDashboard
