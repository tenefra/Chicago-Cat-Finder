import React from "react"

import "./PopupComponentStyles.css"

function PopupComponent(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ""
  )
}

export default PopupComponent
