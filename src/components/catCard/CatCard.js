import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { createTheme } from "@material-ui/core/styles"
import Icon from "@mdi/react"
import { mdiHeart } from "@mdi/js"

import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"
import "./catCardStyles.css"

const theme = createTheme({
  palette: {
    primary: {
      light: "#a47fc7",
      main: "#745296",
      dark: "#462868",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
})

function CatCard(props) {
  const cat = props.cat
  const globalState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  async function heartAddHandler(e) {
    e.preventDefault()
    console.log(cat)
    try {
      const response = await Axios.post("http://localhost:3306/cats/addfavorites", { userID: globalState.user.id, catID: cat.catID, name: cat.name, img: cat.img, age: cat.age, shelter: cat.shelter })

      if (response.data) {
        console.log("Added cat to favorites")
        appDispatch({ type: "addToFavorites", value: cat })
      } else {
        console.log("This user has not favorited any cats yet.")
      }
    } catch (e) {
      console.log(e.response)
    }
  }

  async function heartRemoveHandler(e) {
    e.preventDefault()

    try {
      const response = await Axios.delete("http://localhost:3306/cats/removefavorites", { data: { userID: globalState.user.id, catID: cat.catID } })

      if (response.data.affectedRows > 0) {
        console.log("Removed cat from favorites")
        appDispatch({ type: "removeFromFavorites", value: globalState.favorites.map(item => item.catID).indexOf(cat.catID) })
      } else {
        console.log("No cats have been removed from this user's list.")
      }
    } catch (e) {
      console.log(e.response)
    }
  }

  const checkLikes = cat => {
    return globalState.favorites.some(favorite => cat.catID === favorite.catID)
  }

  return (
    <Card sx={{ width: 280 }}>
      {checkLikes(cat) ? <Icon onClick={heartRemoveHandler} className="card-heart-liked" path={mdiHeart} size={2} /> : <Icon onClick={heartAddHandler} className="card-heart-empty" path={mdiHeart} size={2} />}

      <CardMedia component="img" height="180" src={cat.img} alt="cat photo" />
      <CardContent style={{ textAlign: "center" }}>
        <Link to={`/cat/${cat.catID}`}>
          <Typography color={theme.palette.primary.dark} gutterBottom variant="h4" component="div">
            {cat.name}
          </Typography>
        </Link>
        <Typography variant="h6" color="text.secondary">
          {cat.age}
        </Typography>
        <Typography style={{ padding: "0 0 10px" }} variant="p" color="text.secondary">
          {cat.shelter}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} size="medium">
          Adoptable
        </Button>
      </CardActions>
    </Card>
  )
}

export default CatCard
