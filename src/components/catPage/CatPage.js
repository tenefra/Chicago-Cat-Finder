import React, { useContext, useEffect } from "react"
import { useParams } from "react-router"
import Axios from "axios"

import LoadingDotsIcon from "../loadingDotsIcon/LoadingDotsIcon"
import "./catPageStyles.css"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function CatPage() {
  const { id } = useParams()
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  async function requestIndividual() {
    try {
      const response = await Axios.post("https://young-fortress-07940.herokuapp.com/token")
      const accessToken = response.data

      if (accessToken) {
        try {
          console.log(id)
          const catResponse = await Axios.get(`https://api.petfinder.com/v2/animals/${id}`, {
            headers: {
              Authorization: "Bearer " + accessToken
            }
          })
          if (catResponse.data) {
            console.log("Cats have been successfully fetched!")
            appDispatch({ type: "updateCats", data: catResponse.data })
          } else {
            console.log("We were unable to complete this request but the access token was valid.")
          }
        } catch {
          console.log("This access token is either no longer valid or the request is not valid.")
        }
      } else {
        console.log("This request did not return a valid token.")
      }
    } catch {
      console.log("This was not a valid request.")
    }
  }

  const contactClicked = () => {
    appDispatch({ type: "contactClicked" })
  }

  const petFinderClicked = url => {
    window.open = url
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (globalState.cats == undefined) {
    requestIndividual()
    return <LoadingDotsIcon />
  }
  if (globalState.cats.length !== 0) {
    const cat = globalState.cats.find(cat => cat.id == id)
    appDispatch({ type: "updateCurrentCat", data: cat })
    return (
      <>
        <div>
          <section className="cat-page-topsection">
            <div>
              <img className="cat-page-img" src={cat.photos[0].large || cat.photos} />
            </div>
            <div className="cat-page-column-one">
              {cat.distance == null ? null : <button className="body-style distance-button">{cat.distance.toFixed(1)} miles</button>}

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
                <button onClick={contactClicked} className="contact-button body-style">
                  Contact the shelter/foster
                </button>
                <a href={cat.url} className="contact-button body-style">
                  View on PetFinder
                </a>
              </div>
            </div>
          </section>
        </div>
      </>
    )
  }
  return <LoadingDotsIcon />
}

export default CatPage
