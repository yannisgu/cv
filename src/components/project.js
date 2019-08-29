import React from "react"
import Img from "gatsby-image"
import "./project.scss"
import { breakpointSmall } from "../constants"

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
      <div className="project__content">
        <div className="project__description">
          <div class="project__timeframe">{timeframe}</div>
          {children}
          <div class="project__attribute">
            <span class="project__attribute-title">Technologies: </span>
            {technologies}
          </div>
          <div class="project__attribute">
            <span class="project__attribute-title">Employer: </span>
            {employer}
          </div>
          <a href={link}>{link}</a>
        </div>
        {image && (
          <div className="project__image">
            <Img fluid={imageWithSizes} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Project
