import React from "react"
import Img from "gatsby-image"
import "./project.scss"
import { breakpointSmall } from "../constants"
import Button from "./button"

const Project = ({
  title,
  link,
  technologies,
  children,
  timeframe,
  employer,
  image,
}) => {
  const imageWithSizes = {
    ...image,
    sizes: `(max-width: ${breakpointSmall}) 100vw, 33vw`,
  }

  return (
    <div className="project">
      <h3>{title}</h3>
      {image && (
        <div className="project__image">
          <Img fluid={imageWithSizes} alt={`Screenshot of ${title}`} />
        </div>
      )}
      <div className="project__description">
        <div className="project__timeframe">{timeframe}</div>
        <div className="project__content">{children}</div>
        <div className="project__attribute">
          <span className="project__attributeTitle">Technologies: </span>
          {technologies}
        </div>
        <div className="project__attribute">
          <span className="project__attributeTitle">Employer: </span>
          {employer}
        </div>
      </div>
      {link && (
        <div className="project__button">
          <Button href={link}>Discover project</Button>
        </div>
      )}
    </div>
  )
}

export default Project
