import React from "react"

const Project = ({
  title,
  link,
  technologies,
  children,
  timeframe,
  employer,
}) => {
  return (
    <div class="project">
      <h3>{title}</h3>
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
  )
}

export default Project
