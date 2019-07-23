import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageHero from "../components/ImageHero"
import ImageFour from "../components/imageFour"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 class="main-h">PayPal eWallet & Casinos That Accept PayPal</h1>
    <article><p>In case you like and want to stick around with the best, you are in the right place. There’s no need for more searching on the web: PayPal is the largest and most popular ewallet out there, there’s no doubt about it. That is why we won’t bug you with details you most likely have heard or read countless times. We’ll only show you the cold hard facts that place Paypal on top of the ewallet mountain. The same cold hard facts that will confirm you made the right choice to research out the grandfather of epayments and try it out for your online casino deposits & withdrawals.</p>
    <h2>About Paypal</h2>
    <p>Why the actual grandfather? Because PayPal was established in December 1998, during the famous dot.com bubble. Actually, it was one of the few that survived the dot.com bubble burst, in the early 2000s.</p></article>
    <div class="center-image" style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
    <ImageFour /> </div>
    <p>Interestingly enough, the initial name of the service was Confinity and only after a merger with Elon Musk’s company X.com, it was renamed to PayPal, in 2001.

18 years later, the payment service is ranked 222nd by revenue in the top US corporations published by Fortune 500 ($15.45 billion in 2018 alone). Currently, it has close to 280 million active accounts across more than 200 markets, and almost 22,000 employees worldwide.</p>
  </Layout>
)

export default SecondPage
