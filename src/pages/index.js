import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../sections/projects"
import Workplaces from "../sections/workplaces"

const sections = [
  {
    title: "Projects",
    id: "projects",
    content: <Projects />,
  },
  {
    title: "Work History",
    id: "workHistory",
    content: <Workplaces />,
  },
  {
    title: "Qualifications",
    id: "qualifications",
    content: (
      <>
        <table>
          <tbody>
            <tr>
              <td>2016 - present</td>
              <td>
                Bachelor in applied science, Informatics, Fernfachhochschule
                Schweiz
              </td>
            </tr>
            <tr>
              <td>2010 - 2014</td>
              <td>
                Apprentship Informatics, Federal Diploma of Vocational Education
                and Training
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        <h3>Languages</h3>
        <table>
          <tbody>
            <tr>
              <td>German</td>
              <td>Mother tongue</td>
            </tr>
            <tr>
              <td>French</td>
              <td>Oral: Mother tongue, written: good knowledge</td>
            </tr>
            <tr>
              <td>English</td>
              <td>Good knowlege and professional experience (~ C1)</td>
            </tr>
          </tbody>
        </table>

        <h3>Technologies</h3>
        <table>
          <tbody>
            <tr>
              <td>C#, .NET Framework</td>
              <td>Very good knowledge</td>
            </tr>
            <tr>
              <td>ASP.NET MVC</td>
              <td>Very good knowledge</td>
            </tr>
            <tr>
              <td>TeamCity, Octopus Deploy</td>
              <td>Very Good knowlege</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>Very good knowlege</td>
            </tr>
            <tr>
              <td>React</td>
              <td>Very good knowlege</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Good knowlege</td>
            </tr>
            <tr>
              <td>HTMl standards</td>
              <td>Good knowlege</td>
            </tr>
            <tr>
              <td>Angular</td>
              <td>Good knowledge</td>
            </tr>
            <tr>
              <td>Networking</td>
              <td>Good knowlege</td>
            </tr>
            <tr>
              <td>Server administration</td>
              <td>Good knowlege</td>
            </tr>
            <tr>
              <td>Accessibility</td>
              <td>Basic knowlege</td>
            </tr>
          </tbody>
        </table>

        <h3>Personal skills</h3>
        <ul>
          <li>Fast learning skills and high intake capacity</li>
          <li>Calm and endurant, especially under stress situation</li>
          <li>
            Ability to work independant and in a team, including taking over
            leadership roles in a team
          </li>
          <li>Very short & precise communication style</li>
        </ul>
      </>
    ),
  },

  {
    title: "Interests & involvements",
    id: "interests",
    content: (
      <>
        <ul>
          <li>
            Member of the organisation comitee of the running race "La Tzampata"
          </li>
          <li>Member of the comitee of the orienteering club "OLG Murten"</li>
          <li>Coach of the regional squad in orienteering "Cadre Romand"</li>
        </ul>
      </>
    ),
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="CV" />
    <h1>Yannis Güdel, Developer</h1>
    <p>
      As a developer I always aim to make peoples life easier. After having
      spent most of my work experience caring about the backend of websties, I
      now look forward to make the next generation of web UIs enjoyable to use,
      fast and accessible.
    </p>
    <ul class="tableOfContents">
      {sections.map(_ => (
        <li key={_.id}>
          <a href={`#${_.id}`}>{_.title}</a>
        </li>
      ))}
    </ul>
    {sections.map(_ => (
      <div class="section" id={_.id} key={_.id}>
        <h2>{_.title}</h2>
        {_.content}
      </div>
    ))}
  </Layout>
)

export default IndexPage
