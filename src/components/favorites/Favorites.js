import React, { useContext, useEffect } from "react"

import StateContext from "../../StateContext"
import CatCard from "../catCard/CatCard"
import "./favoritesStyles.css"

function Favorites(props) {
  const globalState = useContext(StateContext)
  const fetchFavorites = props.fetchFavorites

  useEffect(() => {
    fetchFavorites()
  }, [globalState.user])

  if (globalState.favorites.length !== 0) {
    return (
      <>
        <h1 className="adoptables-title">Cats {globalState.user.username} Has Their Eye On</h1>
        <ul className="items">
          {globalState.favorites.map(cat => {
            return <CatCard cat={cat} key={cat.id} />
          })}
        </ul>
      </>
    )
  }
  return <h1 className="no-favorites-header">You haven't favorited any cats yet!</h1>
}

export default Favorites
