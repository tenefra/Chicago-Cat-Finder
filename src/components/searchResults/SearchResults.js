import React, { useContext } from "react"
import { createTheme } from "@material-ui/core/styles"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"
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

function SearchResults(props) {
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const requestCats = props.requestCats

  const handleZipChange = e => {
    appDispatch({ type: "updateZipcode", value: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    requestCats()
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input onChange={handleZipChange} type="text" className="results-form" name="zip" placeholder={globalState.zipcode}></input>
      </form>

      <div className="items">
        {globalState.cats.map(cat => {
          return (
            <>
              <CatCard cat={cat} key={cat.id} />
            </>
          )
        })}
      </div>
    </>
  )
}

export default SearchResults
