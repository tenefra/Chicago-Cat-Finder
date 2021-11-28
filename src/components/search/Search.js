import React, { useContext } from "react"
import Icon from "@mdi/react"
import { mdiMagnify } from "@mdi/js"

import { History, withRouter } from "react-router-dom"

import DispatchContext from "../../DispatchContext"
import Image from "../../images/Background.jpg"

import "./searchStyles.css"

function Search(props) {
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
              <Icon path={mdiMagnify} size={1.5} color="black" />
            </button>
          </form>
        </div>
      </div>
      <img className="desktop-hidden mobile-image" alt="Cat background" src={Image} />
    </div>
  )
}

export default withRouter(Search)
