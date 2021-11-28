import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Icon from "@mdi/react"
import { mdiHeart } from "@mdi/js"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"
import "./catCardStyles.css"

function CatCard(props) {
  const cat = props.cat
  const cleanName = decodeHtml(props.cat.name)
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  async function heartAddHandler(e) {
    e.preventDefault()
    if (globalState.loggedIn) {
      try {
        const response = await Axios.post("https://young-fortress-07940.herokuapp.com/cats/addfavorites", { userID: globalState.user.id, id: cat.id, name: cat.name, photos: cat.photos[0].large, age: cat.age, organizationId: cat.organization_id, gender: cat.gender, size: cat.size, description: cat.description, status: cat.status, distance: cat.distance, url: cat.url })

        if (response.data) {
          console.log("Added cat to favorites")
          appDispatch({ type: "addToFavorites", value: cat })
        } else {
          console.log("This user has not favorited any cats yet.")
        }
      } catch (e) {
        console.log(e.response)
      }
    } else {
      appDispatch({ type: "loginClicked" })
    }
  }

  async function heartRemoveHandler(e) {
    e.preventDefault()

    try {
      const response = await Axios.delete("https://young-fortress-07940.herokuapp.com/cats/removefavorites", { data: { userID: globalState.user.id, id: cat.id } })

      if (response.data.affectedRows > 0) {
        console.log("Removed cat from favorites")
        appDispatch({ type: "removeFromFavorites", value: globalState.favorites.map(item => item.id).indexOf(cat.id) })
      } else {
        console.log("No cats have been removed from this user's list.")
      }
    } catch (e) {
      console.log(e.response)
    }
  }

  const checkLikes = cat => {
    return globalState.favorites.some(favorite => cat.id === favorite.id)
  }

  function decodeHtml(html) {
    var txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
  }

  if (cat.photos.length !== 0) {
    return (
      <Card className="card-margin">
        {checkLikes(cat) ? <Icon onClick={heartRemoveHandler} className="card-heart-liked" path={mdiHeart} size={2} /> : <Icon onClick={heartAddHandler} className="card-heart-empty" path={mdiHeart} size={2} />}
        <Link to={`/cat/${cat.id}`}>
          <CardMedia component="img" height="180" src={cat.photos[0].medium || cat.photos || "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2886&q=80"} alt={cat.name} />
        </Link>
        <CardContent style={{ textAlign: "center" }}>
          <Link to={`/cat/${cat.id}`}>
            <Typography className="p-style body-style" color="#000" gutterBottom variant="h5" component="div">
              {cleanName}
            </Typography>
          </Link>
          <Typography className="p-style body-style" variant="h6" color="text.secondary">
            {cat.age}
          </Typography>
          <Typography className="p-style body-style" style={{ padding: "0 0 10px" }} variant="p" color="text.secondary">
            {cat.gender}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="body-style" style={{ backgroundColor: "#b3ddf2", color: "#000", fontWeight: "bold" }} size="medium">
            Adoptable
          </Button>
        </CardActions>
      </Card>
    )
  }
  return (
    <Card className="card-margin">
      {checkLikes(cat) ? <Icon onClick={heartRemoveHandler} className="card-heart-liked" path={mdiHeart} size={2} /> : <Icon onClick={heartAddHandler} className="card-heart-empty" path={mdiHeart} size={2} />}

      <CardMedia component="img" height="180" src={"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2886&q=80"} alt={cat.name} />

      <CardContent style={{ textAlign: "center" }}>
        <Link to={`/cat/${cat.id}`}>
          <Typography className="p-style body-style" color="#000" gutterBottom variant="h5" component="div">
            {cleanName}
          </Typography>
        </Link>
        <Typography className="p-style body-style" variant="h6" color="text.secondary">
          {cat.age}
        </Typography>
        <Typography className="p-style body-style" style={{ padding: "0 0 10px" }} variant="p" color="text.secondary">
          {cat.gender}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="body-style" style={{ backgroundColor: "#b3ddf2", color: "#000", fontWeight: "bold" }} size="medium">
          Adoptable
        </Button>
      </CardActions>
    </Card>
  )
}

export default CatCard
