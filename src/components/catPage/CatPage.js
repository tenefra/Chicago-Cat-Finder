import React, { useContext } from "react"
import { useParams } from "react-router"

import "./catPageStyles.css"

import StateContext from "../../StateContext"

function CatPage() {
  const { id } = useParams()
  const globalState = useContext(StateContext)
  const cat = globalState.cats.find(cat => cat.id == id)

  return (
    <>
      <container>
        <section className="cat-page-topsection">
          <div className="cat-page-column-one">
            <h1 className="cat-page-name">{cat.name}</h1>
            <h4 className="cat-page-subitem">{cat.age}</h4>
            <h4 className="cat-page-subitem">{cat.shelter}</h4>
          </div>
          <div>
            <img className="cat-page-img" src={cat.photos[0].large} />
          </div>
        </section>
      </container>
    </>
  )
}

export default CatPage
