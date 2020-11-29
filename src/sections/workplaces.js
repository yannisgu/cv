import React from "react"
import Workplace from "../components/workplace"

const Workplaces = () => {
  return (
    <div className="marginTop">
      <Workplace
        title="Software Developer (70%)"
        company="Nothing AG"
        timeframe="12.2019 - Present"
      >
        <ul>
          <li>
            Leading the future strategy of our development and digital infrastructure circles
          </li>
          <li>Development of Frontend applications</li>
          <li>
            Support of business acquisition and project coordination with technical inputs and estimations
          </li>
        </ul>
      </Workplace>
    
      <Workplace
        title="Co-Owner (Part-time)"
        company="Livemotion GmbH"
        timeframe="2017 - Present"
      >
        <ul>
          <li>
            Building a live video production business
          </li>
          <li>Writing applications with the goal to support live video productions with data</li>
        </ul>
      </Workplace>
      <Workplace
        title="Application Engineer (60% - 80%)"
        company="Unic AG"
        timeframe="04.2016 - 08.2019"
      >
        <ul>
          <li>
            Technical responsibility for Sitecore projects and release
            management
          </li>
          <li>Development of Sitecore solutions</li>
          <li>
            Assistance to project manager in planning as well as offer writing
          </li>
          <li>
            Assessment of job applications, execution of recruiting interviews,
            with having a functional employment decision
          </li>
        </ul>
      </Workplace>
      <Workplace
        title="Software Developer (0% - 20%)"
        company="Swiss Orienteering"
        timeframe="2016 - 2020"
      >
        <ul>
          <li>Development of a training diary platform called T-Pak</li>
        </ul>
      </Workplace>
      <Workplace
        title="Civil Service"
        company="la trouvaille"
        timeframe="09.2015 - 03.2016"
      >
        <ul>
          <li>Day responsibility for a second-hand shop</li>
          <li>
            Support and supervision of co-workers doing a professional
            reintegration
          </li>
          <li>Assistance in the shop and sorting of donations</li>
        </ul>
      </Workplace>
      <Workplace
        title="Application Engineer"
        company="Unic AG"
        timeframe="08.2014 - 07.2015"
      >
        <ul>
          <li>
            Development of PowerShell tools for processes of automated building,
            testing and deployment of Sitecore solutions
          </li>
          <li>
            Configuration, troubleshooting and testing of TeamCity build
            pipelines
          </li>
          <li>
            Configuration, troubleshooting and testing of Octopus Deploy
            deployment tracks
          </li>
        </ul>
      </Workplace>
      <Workplace
        title="Apprentice in informatics"
        company="Unic AG"
        timeframe="08.2010 - 07.2014"
      >
        <ul>
          <li>
            Applied learning of all professional Software Development aspects,
            as well as the basics of project management
          </li>
          <li>Development of SharePoint customizations</li>
          <li>Development of Applications with ASP.NET Web Forms</li>
        </ul>
      </Workplace>
    </div>
  )
}

export default Workplaces
