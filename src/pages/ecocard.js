import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 class="main-h">Hi from the EcoCard page</h1>
    <p>Welcome</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
