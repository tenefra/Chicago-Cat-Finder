import React from "react"
import Icon from "@mdi/react"
import { mdiCat } from "@mdi/js"

import "./searchStyles.css"

function Search() {
  return (
    <container className="background-container">
      <h1 className="search-title">Find a cat near you!</h1>
      <div className="search-container">
        <div className="search-box">
          <input type="text" className="search-input" placeholder="Zip Code"></input>
          <button className="search-button">
            <Icon path={mdiCat} size={1.5} color="white" />
          </button>
        </div>
      </div>
    </container>
  )
}

export default Search
