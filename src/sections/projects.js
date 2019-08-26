import React from "react"
import Project from "../components/project"

const Projects = () => {
  return (
    <>
      <Project
        title="Optimierung Post Portal"
        link="https://www.post.ch"
        timeframe="2018-2019"
        technologies="Sitecore (.NET, C#), Estatico (HTML, CSS, Handlebars, JavaScript) and Preact"
        employer="Unic AG"
      >
        As technical respsonsible I was in the lead of implementing a redesign
        of the portal of the Swiss Post with a team of ca. 10 developers. My
        main responsibilities were the specification of the requirements, the
        management of stakeholders, planing the sprints, leading the overall
        architecure process, as well as reviewing the code. The Post portal is
        the main information source for clients of the Swiss Post, by covering
        the vast portfolio of services the Swiss Post offers. Also the Portal
        provides navigation elements for all online applications of Swiss Post.
      </Project>
      <Project
        title="Post Microsites"
        link="https://microsites.post.ch/de"
        timeframe="2016-2018"
        technologies="Sitecore (.NET, C#), Estatico (Handlebars, SCSS, JavaScript)"
        employer="Unic AG"
      >
        I shaped the microsites framework of the Swiss Post significantly, being
        a developer since the begining. The framework allows the Swiss Post to
        launch new Microsites in no time, without losing the flexibility to give
        an own character to every Microsite. From 2017 till 2018 I was technical
        responsible of the product, leading a team of 3-5 developers.
      </Project>
      <Project
        title="Release Management Post Portal"
        link="https://www.post.ch"
        timeframe="2016-2018"
        technologies="Sitecore (.NET, C#), Estatico (Handlebars, SCSS, JavaScript)"
        employer="Unic AG"
      >
        Being the main information platform of Swiss Post, the portal of Swiss
        Post needs continous improvement. Since 2016 I worked on the release
        management of the portal as developer. In early 2017 I became technical
        responsible for Marketing Automation and Analytics topics, before I
        eventualy became technical reponsible of the whole platform.
      </Project>
      <Project
        title="Orienteering Live-Results"
        link="http://eoc.eoc2018.live/long/#/category/MEN"
        timeframe="2016-2019"
        technologies="React, SCSS"
        employer="Self-Employed / ResultService GmbH"
      >
        For the timekeeping company «Results-Service GmbH» I desinged and
        developed a new frontend for orienteering Live-Results. The live-results
        have since then been used at the Junior World Championships and the
        European Championships, as well as couple other internation Orienteering
        races.
      </Project>
      <Project
        title="TV-Graphics for Split-times"
        timeframe="2017-2019"
        technologies="CasparCG, React, Angular, SVG"
        employer="Self-Employed / Livemotion GmbH"
      >
        For the small TV production company Livemotion I developed a system to
        show split-times graphics in TV productions in real-time. Via the
        controller UI the graphic operator is able to control which graphic
        should be shown in real-time.
      </Project>
      <Project
        title="Relaunch T-Pak"
        timeframe="2016-2018"
        technologies="Angular, NodeJS"
        employer="Swiss Orienteering"
        link="https://www.t-pak.ch/"
      >
        T-Pak is the online training diary for all Swiss orienteers. It was
        built in 2003 and has since then collected a big amount of technical
        debts. I was then asked to work on the second and last attempt to
        rebuild this complex application, keeping the old database, but
        rewriting the code from skratch in a team of 2 developers. I had a core
        part in the conception, implemeneted the analysis part, was responsible
        infrastructure and reviewed the code my fellow developer wrote.
      </Project>
    </>
  )
}

export default Projects
