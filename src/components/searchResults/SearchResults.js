import React, { useContext, useEffect } from "react"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"
import CatCard from "../catCard/CatCard"
import "./searchResultsStyles.css"
import LoadingDotsIcon from "../loadingDotsIcon/LoadingDotsIcon"

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (globalState.cats === "no cats") {
    return <h1>No cats up for adoption in this area</h1>
  }
  if (globalState.cats.length !== 0) {
    return (
      <>
        <form onSubmit={e => handleSubmit(e)}>
          <input onChange={handleZipChange} type="text" className="results-form" name="zip" autoComplete="off" placeholder={globalState.zipcode}></input>
        </form>

        <div className="items">
          {globalState.cats.map(cat => {
            return <CatCard cat={cat} key={cat.id} />
          })}
        </div>
      </>
    )
  }
  return <LoadingDotsIcon />
}

export default SearchResults
