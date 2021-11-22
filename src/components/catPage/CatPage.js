import React, { useContext } from "react"
import { useParams } from "react-router"

import "./catPageStyles.css"

import StateContext from "../../StateContext"

function CatPage() {
  const { id } = useParams()
  const globalState = useContext(StateContext)
  const cat = globalState.cats.find(cat => cat.id == id)
  const distance = cat.distance
  const round = distance.toFixed(1)

  return (
    <>
      <container>
        <section className="cat-page-topsection">
          <div className="cat-page-column-one">
            <button className="body-style distance-button">{round} miles</button>
            <h1 className="cat-page-name">{cat.name}</h1>
            <p className="cat-page-description">{cat.description}</p>
            <h5 className="cat-page-subitem">About {cat.name}</h5>
            <p className="cat-page-about">
              <strong>Gender:</strong> {cat.gender}
            </p>
            {cat.attributes.spayed_neutered ? (
              <p className="cat-page-about">Spayed or neutered</p>
            ) : (
              <p className="cat-page-about">
                Has <strong>not</strong> been spayed or neutered
              </p>
            )}
            {cat.attributes.declawed ? <p className="cat-page-about">{cat.name} has been declawed :(</p> : null}
            {cat.attributes.special_needs ? <p className="cat-page-about">Special needs cat</p> : null}
            {cat.attributes.shots_current ? (
              <p className="cat-page-about">Shots up to date</p>
            ) : (
              <p className="cat-page-about">
                Shots are <strong>not</strong> up to date
              </p>
            )}
            <div className="contact-section">
              <button className="contact-button body-style">Contact the shelter/foster</button>
              <button className="contact-button body-style">View on PetFinder</button>
            </div>
          </div>
          <div>
            <img className="cat-page-img" src={cat.photos[0].large || cat.photos} />
          </div>
        </section>
      </container>
    </>
  )
}

export default CatPage
