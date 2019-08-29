import React from "react"
import "./button.scss"

const Button = ({ href, children }) => {
  return (
    <a className="button" href={href}>
      {children}
    </a>
  )
}

export default Button
