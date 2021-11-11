import React, { useContext, useEffect } from "react"
import Axios from "axios"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { createTheme } from "@material-ui/core/styles"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"
import CatCard from "../catCard/CatCard"
import "./favoritesStyles.css"

function Favorites() {
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  async function fetchFavorites() {
    try {
      const response = await Axios.post("http://localhost:3306/cats/findfavorites", { id: globalState.user.id })

      if (response.data) {
        console.log(response.data)
        console.log("Returning favorited cats now...")

        appDispatch({ type: "updateFavorites", data: response.data })
      } else {
        console.log("This user has not favorited any cats yet.")
      }
    } catch (e) {
      console.log(e.response)
    }
  }

  useEffect(() => {
    fetchFavorites()
  }, [])

  return (
    <>
      <h1 className="adoptables-title">Cats {globalState.user.username} Has Their Eye On</h1>
      <ul className="items">
        {globalState.favorites.map(cat => {
          return <CatCard cat={cat} key={cat.catID} />
        })}
      </ul>
    </>
  )
}

export default Favorites
