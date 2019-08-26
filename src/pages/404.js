import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      Congratulations you found a black hole! If you are uncomfortable with it,
      go back to the <Link to="/">normal world</Link> .
    </p>
  </Layout>
)

export default NotFoundPage
