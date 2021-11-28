import React, { useContext, useEffect } from "react"
import Axios from "axios"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"
import Navigation from "../navigation/Navigation"
import Router from "../../Router"
import Popups from "../popups/Popups"

function Main() {
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  useEffect(() => {
    requestCats()
    fetchFavorites()
  }, [])

  async function fetchFavorites() {
    try {
      const response = await Axios.post("https://young-fortress-07940.herokuapp.com/cats/findfavorites", { id: globalState.user.id })

      if (response.data) {
        const updatedFavorites = []
        const arr = response.data
        for (let i = 0; i < arr.length; i++) {
          const currentCatId = arr[i].id
          try {
            const response = await Axios.post("https://young-fortress-07940.herokuapp.com/token")
            const accessToken = response.data

            if (accessToken) {
              try {
                const catResponse = await Axios.get(`https://api.petfinder.com/v2/animals/${currentCatId}`, {
                  headers: {
                    Authorization: "Bearer " + accessToken
                  }
                })
                if (catResponse) {
                  console.log(catResponse.data.animal)
                  updatedFavorites.push(catResponse.data.animal)
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
        appDispatch({ type: "updateFavorites", data: updatedFavorites })
      } else {
        console.log("This user has not favorited any cats yet.")
      }
    } catch (e) {
      console.log(e.response)
    }
  }

  async function requestCats() {
    const zip = parseInt(globalState.zipcode)
    appDispatch({ type: "removeCats" })

    try {
      const response = await Axios.post("https://young-fortress-07940.herokuapp.com/token")
      const accessToken = response.data

      if (accessToken) {
        try {
          const catResponse = await Axios.get(`https://api.petfinder.com/v2/animals?type=cat&page=1&location=${zip}&distance=5`, {
            headers: {
              Authorization: "Bearer " + accessToken
            }
          })
          if (catResponse.data.animals) {
            if (catResponse.data.animals.length === 0) {
              console.log("There are no cats up for adoption within this range.")

              appDispatch({ type: "updateCats", data: "no cats" })
            } else {
              console.log("Cats have been successfully fetched!")

              appDispatch({ type: "updateCats", data: catResponse.data.animals })
            }
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

  return (
    <>
      <Navigation />
      <Router fetchFavorites={fetchFavorites} requestCats={requestCats} />
      <Popups />
    </>
  )
}

export default Main
