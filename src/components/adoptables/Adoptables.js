import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { createTheme } from "@material-ui/core/styles"

import "./adoptablesStyles.css"
import merlin from "./images/merlin.jpg"
import spicy from "./images/spicy.JPG"

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
function Adoptables() {
  return (
    <container>
      <div style={{ backgroundColor: theme.palette.primary.main, height: "50px", width: "100%" }}></div>
      <h1 className="adoptables-title">Cats Looking for a Home in Chicago</h1>
      <div className="card-container">
        <Card sx={{ width: 280 }}>
          <CardMedia component="img" height="180" src={merlin} alt="merlin" />
          <CardContent style={{ textAlign: "center" }}>
            <Typography color={theme.palette.primary.dark} gutterBottom variant="h4" component="div">
              Merlin
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Adult
            </Typography>
            <Typography style={{ padding: "0 0 10px" }} variant="p" color="text.secondary">
              Tree House Humane Society
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} size="medium">
              Chicago
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 280 }}>
          <CardMedia component="img" height="180" src={spicy} alt="green iguana" />
          <CardContent style={{ textAlign: "center" }}>
            <Typography color={theme.palette.primary.dark} gutterBottom variant="h4" component="div">
              Spicy
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Adult
            </Typography>
            <Typography style={{ padding: "0 0 10px" }} variant="p" color="text.secondary">
              Tree House Humane Society
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} size="medium">
              Chicago
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 280 }}>
          <CardMedia component="img" height="180" src={merlin} alt="green iguana" />
          <CardContent style={{ textAlign: "center" }}>
            <Typography color={theme.palette.primary.dark} gutterBottom variant="h4" component="div">
              Merlin
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Adult
            </Typography>
            <Typography style={{ padding: "0 0 10px" }} variant="p" color="text.secondary">
              Tree House Humane Society
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} size="medium">
              Chicago
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ width: 280 }}>
          <CardMedia component="img" height="180" src={spicy} alt="green iguana" />
          <CardContent style={{ textAlign: "center" }}>
            <Typography color={theme.palette.primary.dark} gutterBottom variant="h4" component="div">
              Spicy
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Adult
            </Typography>
            <Typography style={{ padding: "0 0 10px" }} variant="p" color="text.secondary">
              Tree House Humane Society
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }} size="medium">
              Chicago
            </Button>
          </CardActions>
        </Card>
      </div>
    </container>
  )
}

export default Adoptables
