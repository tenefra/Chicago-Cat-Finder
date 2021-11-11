import React, { useContext } from "react"
import { createTheme } from "@material-ui/core/styles"

import StateContext from "../../StateContext"
import CatCard from "../catCard/CatCard"
import "./searchResultsStyles.css"

const theme = createTheme({
  palette: {
    primary: {
      light: "#a47fc7",
      main: "#745296",
      dark: "#462868",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
})

function SearchResults() {
  const globalState = useContext(StateContext)

  return (
    <div className="items">
      {globalState.cats.map(cat => {
        return (
          <>
            <CatCard cat={cat} key={cat.catID} />
          </>
        )
      })}
    </div>
  )
}

export default SearchResults
