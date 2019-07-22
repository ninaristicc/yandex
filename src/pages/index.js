import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ImageOne from "../components/imageOne"
import ImageTwo from "../components/imageTwo"
import ImageLogo from "../components/logo"
import SEO from "../components/seo"
import ImageHero from "../components/ImageHero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home page" />
    <h1 class="main-h">Choose The Best eWallet App In 2019</h1>
    <article><p>Whether you want to improve your consumer experience online or just enjoy yourself by playing your favorite casino games without any fuss, ewallets must be your default payment processing option.</p></article>
    <div class="center-image" style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
    <ImageTwo /> </div>
    <article><p>It doesn’t matter where you live & it doesn’t matter why you do it, having an ewallet account in 2019 is virtually mandatory. Just ask the hundreds of millions of customers who use an ewallet application on a day-to-day basis. Don’t worry if you aren’t familiar with this awesome payment method or you are on an information overload after searching for the best digital wallet for you. We’re here to help by providing you with only the best options out there. Follow our eWallet Reviews 2019.</p>
    <h2>What Is An eWallet?</h2>
    <p>An ewallet or a digital wallet is nothing more than a web application developed by a payment processing company that greatly facilitates the communication between a buyer and a seller.</p></article>
    <p>It’s an online account where you can manage your money just as you would with a normal wallet. You take some cash with you or you grab your credit/debit card, depending on the situation, you place it in your wallet, and start spending. The same applies to a digital wallet. After you’ve created your account following some simple steps - in most cases, just typing your name, e-mail address, and password - you can top-up your ewallet by adding funds via a variety of sources likebank transfer, credit/debit card, or even the trending prepaid vouchers like paysafecard or neosurf.</p>
    <div class="center-image" style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
    <ImageOne /> </div>
    <p>After that, the (online) world is yours for the taking. You can spend your ewallet money on virtually anything, from food, clothes, appliances, and electronics to various services like online courses, hosting & domain registrations, IT troubleshooting, you name it. The possibilities are endless!</p>
    <h3>Top-Rated eWallet For General Use</h3>
    <div class="content-box"><div class="image-box" style={{ width: "100%", position: "relative", height: "5.5em" }}><ImageHero /></div>
    <h4>PayPal</h4>
    <p>PayPal is the most popular ewallet on the Internet. With almost 280 million active accounts from over 200 markets around the world, it is as used as the VISA/Mastercard option online.</p>
    <a class="button" href="/paypal/">Read More</a></div>
    <h3>Best eWallets for Online Casinos & Gambling</h3>
    <div class="grid"><div class="content-box"><div class="image-box" style={{ width: "100%", position: "relative", height: "5.5em" }}><ImageHero /></div>
    <h4>Yandex</h4>
    <p>PayPal is the most popular ewallet on the Internet. With almost 280 million active accounts from over 200 markets around the world, it is as used as the VISA/Mastercard option online.</p>
    <a class="button" href="/yandex/">Read More</a></div>
    <div class="content-box"><div class="image-box" style={{ width: "100%", position: "relative", height: "5.5em" }}><ImageHero /></div>
    <h4>EcoCard</h4>
    <p>PayPal is the most popular ewallet on the Internet. With almost 280 million active accounts from over 200 markets around the world, it is as used as the VISA/Mastercard option online.</p>
    <a class="button" href="/ecocard/">Read More</a></div></div>
  </Layout>
)

export default IndexPage
