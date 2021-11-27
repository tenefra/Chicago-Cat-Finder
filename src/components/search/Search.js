import React, { useContext, useEffect } from "react"
import Axios from "axios"
import Icon from "@mdi/react"
import { mdiCat } from "@mdi/js"
import { History, withRouter } from "react-router-dom"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

import "./searchStyles.css"

function Search(props) {
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const requestCats = props.requestCats

  const handleZipChange = e => {
    appDispatch({ type: "updateZipcode", value: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    requestCats()
    props.history.push("/cats")
  }

  return (
    <div className="background-container">
      <div className="search-container">
        <h4 className="search-title">Find a cat near you!</h4>
        <div className="search-box">
          <form className="zip-form" onSubmit={e => handleSubmit(e)} autoComplete="off">
            <input onChange={handleZipChange} type="text" className="search-input" name="zip" placeholder="Zip Code"></input>
            <button type="submit" className="search-button">
              <Icon path={mdiCat} size={1.5} color="black" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Search)
