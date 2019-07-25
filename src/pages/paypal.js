import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageFour from "../components/imageFour"
import ImageTwo from "../components/imageTwo"
import ImageThree from "../components/imageThree"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div class="ecocontent">
    <h1 class="main-h">PayPal eWallet & Casinos That Accept PayPal</h1>
    <article><p>In case you like and want to stick around with the best, you are in the right place. There’s no need for more searching on the web: PayPal is the largest and most popular ewallet out there, there’s no doubt about it. That is why we won’t bug you with details you most likely have heard or read countless times. We’ll only show you the cold hard facts that place Paypal on top of the ewallet mountain. The same cold hard facts that will confirm you made the right choice to research out the grandfather of epayments and try it out for your online casino deposits & withdrawals.</p>
    <h2>About Paypal</h2>
    <p>Why the actual grandfather? Because PayPal was established in December 1998, during the famous dot.com bubble. Actually, it was one of the few that survived the dot.com bubble burst, in the early 2000s.</p></article>
    <div class="center-image" style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
    <ImageFour /> </div>
    <p class="contP">Interestingly enough, the initial name of the service was Confinity and only after a merger with Elon Musk’s company X.com, it was renamed to PayPal, in 2001.

18 years later, the payment service is ranked 222nd by revenue in the top US corporations published by Fortune 500 ($15.45 billion in 2018 alone). Currently, it has close to 280 million active accounts across more than 200 markets, and almost 22,000 employees worldwide.</p>
      </div> 
      <aside class="sideBar">
           <div class="wrap">
    <div class="search">
      <input type="text" class="searchTerm" placeholder="Search.."></input>
      <button type="submit" class="searchButton">
      <svg class="contentIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
     </button>
   </div>
   </div>
      <h2 class="side-h">Latest News</h2>
      <article class="side-article">
      <div class="sideImg"><Image /></div>
      <a href="/" class="side-a">Is Bitcoin The Future Of Online Paymants?</a>
      <p class="side-p">Bitcoin may be the future but what about now? Is there a viable option to spend Bitcoin on a wide variety of goods & services? Indeed there is: just use the interface of a couple of familiar ewallets.</p>
      <p class="time"><svg class="contentIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M0 0h24v24H0z" fill="none"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>Tuesday, July 9th, 2019, 5:32:05 PM</p>
      </article>
      <article class="side-article">
      <div class="sideImg"><ImageTwo /></div>
      <a href="/" class="side-a">Choose The Best eWallet For Your Specific Needs</a>
      <p class="side-p">What is the best ewallet out there? It depends from person to person, from one location to another. Find out which ewallet is best for you now!</p>
      <p class="time"><svg class="contentIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M0 0h24v24H0z" fill="none"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>Monday, July 8th, 2019, 5:36:52 PM</p>
      </article>
      <article class="side-article">
      <div class="sideImg"><ImageThree /></div>
      <a href="/" class="side-a">3 Steps To Secure Your eWallet Money Even Further</a>
      <p class="side-p">It’s better to be safe than sorry! Take these three steps to further improve the security of your favorite ewallet and never worry about your money ever again.</p>
      <p class="time"><svg class="contentIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><path d="M0 0h24v24H0z" fill="none"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>Wednesday, July 3rd, 2019, 7:15:49 AM</p>
      </article>
    </aside>
  </Layout>
)

export default SecondPage
