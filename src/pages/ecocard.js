import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/Image"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div class="ecocontent">
    <h1 class="main-h">Hi from the EcoCard page</h1>
    <p>Welcome</p>
    <Link to="/">Go back to the homepage</Link> </div>
    <aside class="sideBar">
      <h2 class="side-h">Latest News</h2>
      <article>
      <div class="sideImg"><Image /></div>
      <a href="/" class="side-a">Is Bitcoin The Future Of Online Paymants?</a>
      </article>
    </aside>
  </Layout>
)

export default SecondPage
