import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImageLogo from "../components/logo"
import ImageImg from "../components/imgimg"

const Header = () => (
  <header style={{ background: `#fff`, marginBottom: `1.45rem` }} >
    <div style={{margin: `0 auto`, maxWidth: 960}}>     
      <div class="logo-style">
      <Link to="/"> <ImageLogo /></Link></div>
    </div>
    <div class="nav">
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle"/>
      <div class="menu">
    <a href="/">Home</a>
    <a href="/paypal/">PayPal</a>
    <a href="/ecocard/">EcoCard</a>
    <a href="/yandex/">Yandex</a>    
    <a href="/other/">Other</a>  
    </div>
    </div>
    <div class="hero-image"><ImageImg /></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
