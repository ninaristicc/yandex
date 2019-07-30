import {Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImageLogo from "../components/logo"
import ImageImg from "../components/imgimg"


const Header = ({getRevolut}) => (

  <header style={{ background: `#fff`, marginBottom: `1.45rem` }} >
    {/* <script src="https://code.jquery.com/jquery-3.4.1.js"></script> */}
    
    <div class="nav">
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle"/>
        <ul class="navbar">
        <li><div style={{margin: `0 auto`, maxWidth: 960}}>     
      <div class="logo-style">
      <Link to="/"> <ImageLogo /></Link></div>
    </div></li>
    <li><a href="/">Home</a></li>
    <li><a href="#ewallet">What Is An eWallet?</a></li>
    <li><a href="/paypal/">PayPal</a></li>
    <li><a href="#aboutpp">About PayPal</a></li>
    <li><a href="/ecocard/">EcoCard</a></li>
    <li><a href="#location">Location</a></li>
    <li><a href="/yandex/">Yandex</a> </li>
    <li><a href="/other/">Other</a>  </li>
    <li><a href="/ecopayz/">EcoPayz</a>  </li>
    <li><a href="/skrill/">Skrill</a>  </li>
    <li><a href="/neteller/">Neteller</a>  </li>
    <li><a href="/blog/">Blog/News</a> </li> 
    </ul>
    </div>
    <div class="hero-image"><ImageImg /></div>
  </header>
)

// $(window).on("scroll", function () {
// if($(window).scrollTop()){
// $('nav').addClass('sticky');
// }
// else {
// $('nav').removeClass('sticky')
// }
// })

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `getRevolut`,
}
export default Header
