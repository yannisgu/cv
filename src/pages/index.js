import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../sections/projects"
import Workplaces from "../sections/workplaces"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"

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
    breakBefore: true,
  },
  {
    title: "Qualifications",
    id: "qualifications",
    content: (
      <table className="marginTop">
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
              Apprenticeship Informatics, Federal Diploma of Vocational
              Education and Training
            </td>
          </tr>
        </tbody>
      </table>
    ),
    breakBefore: true,
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="two-columns-layout marginTop">
        <div>
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
                <td>Very good knowledge and professional experience (~ C1)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>Personal skills</h3>
          <ul>
            <li>Fast learning skills and high intake capacity</li>
            <li>Calm and endurant, especially under stress</li>
            <li>
              Ability to work independently and in a team, including taking over
              leadership roles
            </li>
            <li>Very short & precise communication style</li>
          </ul>
        </div>
        <div>
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
                <td>Very good knowledge</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>Very good knowledge</td>
              </tr>
              <tr>
                <td>React</td>
                <td>Very good knowledge</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>Good knowledge</td>
              </tr>
              <tr>
                <td>HTML standard</td>
                <td>Good knowledge</td>
              </tr>
              <tr>
                <td>Angular</td>
                <td>Good knowledge</td>
              </tr>
              <tr>
                <td>Computer networks</td>
                <td>Good knowledge</td>
              </tr>
              <tr>
                <td>Server administration</td>
                <td>Good knowledge</td>
              </tr>
              <tr>
                <td>Accessibility</td>
                <td>Basic knowledge</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },

  {
    title: "Interests & involvements",
    id: "interests",
    content: (
      <div className="two-columns-layout marginTop">
        <div>
          <h3>Interests</h3>
          <ul>
            <li>Endurance sports like orienteering, running and biking</li>
            <li>Hiking & skiing</li>
            <li>Timekeeping</li>
            <li>Website development</li>
            <li>Technology and development practices</li>
          </ul>
        </div>
        <div>
          <h3>Involvements</h3>
          <ul>
            <li>
              Member of organisation comitee of stairs-running race "La
              Tzampata"
            </li>
            <li>Member of comitee of orienteering club "OLG Murten"</li>
            <li>Coach of regional squad in orienteering "Cadre Romand"</li>
          </ul>
        </div>
      </div>
    ),
  },
]

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    fragment ImagePart on File {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    query {
      yannis: file(relativePath: { eq: "yannis.jpg" }) {
        ...ImagePart
      }
    }
  `)

  return (
    <Layout>
      <SEO title="CV" />
      <div class="header">
        <div>
          <h1>Yannis Güdel, Developer</h1>
          <p>
            As a developer I always aim to make people's lifes easier. After
            having spent most of my work experience caring about backend of
            websites, I now look forward to create the next generation of web
            UIs enjoyable to use, fast and accessible.
          </p>

          <ul className="tableOfContents">
            {sections.map(_ => (
              <li key={_.id}>
                <a href={`#${_.id}`}>{_.title}</a>
              </li>
            ))}
          </ul>
          <table>
            <tr>
              <td>Mail</td>
              <td>
                <a href="mailto:me@yannisguedel.ch">me@yannisguedel.ch</a>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                Muristrasse 88
                <br />
                3007 Bern
              </td>
            </tr>
            <tr>
              <td>Birthdate</td>
              <td>23.12.94</td>
            </tr>
          </table>
        </div>
        <div>
          <Img fluid={data.yannis.childImageSharp.fluid} />
        </div>
      </div>
      {sections.map(_ => (
        <div
          className="section"
          id={_.id}
          key={_.id}
          style={_.breakBefore ? { pageBreakBefore: "always" } : {}}
        >
          <h2>{_.title}</h2>
          {_.content}
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
