import React from "react"
import Project from "../components/project"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    fragment ImagePart on File {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    query {
      postWepp: file(relativePath: { eq: "post-wepp.png" }) {
        ...ImagePart
      }
      postOpp: file(relativePath: { eq: "opp.png" }) {
        ...ImagePart
      }
      postZi: file(relativePath: { eq: "post-zi.png" }) {
        ...ImagePart
      }
      liveResults: file(relativePath: { eq: "live-results.png" }) {
        ...ImagePart
      }
      graphics: file(relativePath: { eq: "graphics.png" }) {
        ...ImagePart
      }
      tpak: file(relativePath: { eq: "tpak.png" }) {
        ...ImagePart
      }
    }
  `)

  return (
    <>
      <Project
        title="Optimierung Post Portal"
        link="https://www.post.ch"
        timeframe="2018-2019"
        technologies="Sitecore (.NET, C#), Estatico (HTML, CSS, Handlebars, JavaScript) and Preact"
        employer="Unic AG"
        image={data.postOpp.childImageSharp.fluid}
      >
        As technical responsible I was in the lead of a project with ca. 10
        developers. The goal of the project was implementing a redesign of the
        portal of Swiss Post. My main responsibilities were: specification of
        the requirements, management and contact with the stakeholders, sprints
        planning, leading the overall architecture process, as well as reviewing
        the code. The Portal is a main information source for clients of Swiss
        Post, as it covers a vast portfolio of services the Swiss Post offers.
        The Portal also provides navigation script for all online applications
        of Swiss Post.
      </Project>
      <Project
        title="Post Microsites"
        link="https://microsites.post.ch/de"
        timeframe="2016-2018"
        technologies="Sitecore (.NET, C#), Estatico (Handlebars, SCSS, JavaScript)"
        employer="Unic AG"
        image={data.postZi.childImageSharp.fluid}
      >
        I shaped a "microsites" framework of Swiss Post significantly, being
        it's developer since the beginning. The framework allows Swiss Post to
        launch new small sites in no time, without losing the flexibility to
        give an own character to every so called "Microsite". From 2017 till
        2018 I was a technical responsible person of the product, leading a team
        of 3-5 developers.
      </Project>
      <Project
        title="Release Management Post Portal"
        link="https://www.post.ch"
        timeframe="2016-2018"
        technologies="Sitecore (.NET, C#), Estatico (Handlebars, SCSS, JavaScript)"
        employer="Unic AG"
        image={data.postWepp.childImageSharp.fluid}
      >
        Being the main information platform of Swiss Post, the portal of Swiss
        Post needs continous improvements. Since 2016 I worked on the release
        management of the portal as a developer. In early 2017 I became a
        technical responsible person for topics of Marketing Automation and
        Analytics, before I eventually became technical reponsible of the whole
        platform.
      </Project>
      <Project
        title="Orienteering Live-Results"
        link="http://eoc.eoc2018.live/long/#/category/MEN"
        timeframe="2016-2019"
        technologies="React, SCSS"
        employer="Self-Employed / ResultService GmbH"
        image={data.liveResults.childImageSharp.fluid}
      >
        For the timekeeping company «Results-Service GmbH» I desinged and
        developed a new frontend for orienteering Live-Results website. The
        Live-Results have since then been used at the Junior World Championships
        and the European Championships, as well as couple other internation
        Orienteering races.
      </Project>
      <Project
        title="TV-Graphics for Split-times"
        timeframe="2017-2019"
        technologies="CasparCG, React, Angular, SVG"
        employer="Self-Employed / Livemotion GmbH"
        image={data.graphics.childImageSharp.fluid}
      >
        For a small TV production company Livemotion I developed a system to
        show split-times graphics in TV productions in real-time. Via a
        controller UI graphics operator is able to control which graphic should
        be shown in real-time.
      </Project>
      <Project
        title="Relaunch T-Pak"
        timeframe="2016-2018"
        technologies="Angular, NodeJS"
        employer="Swiss Orienteering"
        link="https://www.t-pak.ch/"
        image={data.tpak.childImageSharp.fluid}
      >
        T-Pak is an online training diary for all Swiss orienteers. It was built
        in 2003 in PHP and has since then collected a big amount of technical
        debts. I was asked to work on the second and last attempt to rebuild
        this complex application, keeping the old database, but rewriting the
        code from scratch. I had a core part in the conception process,
        implemeneted the analysis part and was responsible for the
        infrastructure. I also reviewed the code of my co-developer.
      </Project>
    </>
  )
}

export default Projects
