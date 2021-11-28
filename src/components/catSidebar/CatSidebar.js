import React, { useContext } from "react"
import StateContext from "../../StateContext"
import "./catSidebarStyles.css"

function CatSidebar() {
  const globalState = useContext(StateContext)

  return (
    <aside className="aside-style">
      <div>Cats</div>
      <form className="sidebar-form">
        <input type="text" name="zip" value={globalState.zipcode || "Zipcode"}></input>
      </form>
    </aside>
  )
}

export default CatSidebar
