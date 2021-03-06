import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { createTheme } from "@material-ui/core/styles"

import StateContext from "../../StateContext"
import CatCard from "../catCard/CatCard"
import LogoIcon from "../../images/Icon.png"
import "./adoptablesStyles.css"

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
  const globalState = useContext(StateContext)

  if (globalState.cats === "no cats") {
    return (
      <div>
        <h1 className="adoptables-title">Cats Looking for a Home in Chicago</h1>
        <div className="card-container">
          <Card sx={{ width: 280, height: 357, backgroundColor: theme.palette.primary.main }}>
            <img className="logo-icon" alt="Windy Kitty Logo" src={LogoIcon} />
            <CardContent style={{ textAlign: "center", padding: "30px 40px 30px" }}>
              <Typography className="body-style" style={{ padding: "0 0 10px", margin: "0 0 40px", color: theme.palette.primary.contrastText }} variant="p">
                More cats available <br />
                in your area!
              </Typography>
            </CardContent>
            <Link to="/cats">
              <CardActions style={{ padding: 0 }}>
                <Button className="body-style meet-them-btn">MEET THEM</Button>
              </CardActions>
            </Link>
          </Card>
        </div>
      </div>
    )
  }

  if (globalState.cats) {
    return (
      <div>
        <h1 className="adoptables-title">Cats Looking for a Home in Chicago</h1>
        <div className="card-container">
          {globalState.cats.slice(0, 3).map(cat => {
            return <CatCard cat={cat} key={cat.id} />
          })}

          <Card className="meet-them-card" sx={{ backgroundColor: "#b3ddf2" }}>
            <img className="logo-icon" alt="Windy Kitty Logo" src={LogoIcon} />
            <CardContent style={{ textAlign: "center", padding: "30px 40px 30px" }}>
              <Typography className="card-copy body-style" style={{ padding: "0 0 10px", margin: "0 0 40px", color: "#000" }} variant="p">
                More cats available <br />
                in your area!
              </Typography>
            </CardContent>
            <Link to="/cats">
              <CardActions style={{ padding: 0 }}>
                <Button className="body-style meet-them-btn">MEET THEM</Button>
              </CardActions>
            </Link>
          </Card>
        </div>
      </div>
    )
  }
  return (
    <container>
      <div style={{ backgroundColor: theme.palette.primary.main, height: "50px", width: "100%" }}></div>
      <h1 className="adoptables-title">Cats Looking for a Home in Chicago</h1>
      <div className="card-container"></div>
    </container>
  )
}

export default Adoptables
