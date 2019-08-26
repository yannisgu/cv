import React from "react"
import Workplace from "../components/workplace"

const Workplaces = () => {
  return (
    <>
      <Workplace
        title="Application Engineer"
        company="Unic AG"
        timeframe="04.2016 - 08.2019"
      >
        <ul>
          <li>
            Technical responsible of Sitecore projects and Release Management
          </li>
          <li>Development of Sitecore solutions</li>
          <li>
            Assisting the project manager in planing as well as offer writing
          </li>
          <li>
            Qualification of job applications, executing recruiting interviews,
            functional employment decision
          </li>
        </ul>
      </Workplace>
      <Workplace
        title="Software Developer"
        company="Swiss Orienteering"
        timeframe="2016 - present"
      >
        <ul>
          <li>Development of the training diary T-Pak</li>
        </ul>
      </Workplace>
      <Workplace
        title="Civil Service"
        company="la trouvaille"
        timeframe="09.2015 - 03.2016"
      >
        <ul>
          <li>Day responsible for a second-hand shop</li>
          <li>
            Support and supervision of co-workers doing a professional
            reintegration
          </li>
          <li>Shop assistant work and sorting of donations</li>
        </ul>
      </Workplace>
      <Workplace
        title="Application Engineer"
        company="Unic AG"
        timeframe="08.2014 - 07.2015"
      >
        <ul>
          <li>
            Development of PowerShell tools for automated build, testing and
            deployment of Sitecore solutions
          </li>
          <li>
            Configuration, troubleshooting and testing of TeamCity build
            pipeline
          </li>
          <li>
            Configuration, troubleshooting and testing of Octopus Deploy
            deployment tracks
          </li>
        </ul>
      </Workplace>
      <Workplace
        title="Apprentice informatics"
        company="Unic AG"
        timeframe="08.2010 - 07.2014"
      >
        <ul>
          <li>
            Applied learning the basics of all professional Software Development
            aspects, as well as the basics of project management
          </li>
          <li>Development of SharePoint customizations</li>
          <li>Development of Applications with ASP.NET Web Forms</li>
        </ul>
      </Workplace>
    </>
  )
}

export default Workplaces
