import React, { useContext } from "react"
import Icon from "@mdi/react"
import { mdiCat } from "@mdi/js"
import { History, withRouter } from "react-router-dom"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

import "./searchStyles.css"

function Search(props) {
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const handleZipChange = e => {
    appDispatch({ type: "updateZipcode", value: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    appDispatch({ type: "updateZipcode", value: globalState.zipcode })
    props.history.push("/cats")
  }
  return (
    <container className="background-container">
      <h1 className="search-title">Find a cat near you!</h1>
      <div className="search-container">
        <div className="search-box">
          <form className="zip-form" onSubmit={e => handleSubmit(e)}>
            <input onChange={handleZipChange} type="text" className="search-input" name="zip" placeholder="Zip Code"></input>
            <button type="submit" className="search-button">
              <Icon path={mdiCat} size={1.5} color="white" />
            </button>
          </form>
        </div>
      </div>
    </container>
  )
}

export default withRouter(Search)
