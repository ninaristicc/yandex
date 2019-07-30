import {Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImageLogo from "../components/logo"
import ImageImg from "../components/imgimg"


const Header = ({getRevolut}) => (

  <header style={{ background: `#fff`, marginBottom: `1.45rem` }} >
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <div style={{margin: `0 auto`, maxWidth: 960}}>     
      <div class="logo-style">
      <Link to="/"> <ImageLogo /></Link></div>
    </div>
    <div class="nav">
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle"/>
      <div class="menu">
    <a href="/">Home</a>
    <a href="#ewallet">What Is An eWallet?</a>
    <a href="#generaluse">Top-Rated eWallet For General Use</a>
    <a href="#casinos">Best eWallets for Online Casinos & Gambling</a>
    {/* <a href="#location">Location</a>
    <a href="/yandex/">Yandex</a>    
    <a href="/other/">Other</a>  
    <a href="/ecopayz/">EcoPayz</a>  
    <a href="/skrill/">Skrill</a>  
    <a href="/neteller/">Neteller</a>  
    <a href="/blog/">Blog/News</a>   */}
    </div>
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
