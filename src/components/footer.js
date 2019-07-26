import React from 'react'
import { Link } from "gatsby"


const Footer = () => (
<footer class="site-footer">
    <ul>
        <li><h4><Link to="/">Get eWallet</Link></h4></li>
        <li><Link to="/paypal/">PayPal </Link></li>
        <li><Link to="/ecocard/">EcoCard </Link></li>
        <li><Link to="/yandex/">Yandex</Link></li>
        <li><Link to="/other/">Other</Link></li>
        <li><Link to="/ecopayz/">EcoPayz</Link></li>
        <li><Link to="/skrill/">Skrill</Link></li>
        <li><Link to="/neteller/">Neteller</Link></li>
        <li><Link to="/blog/">Blog/News</Link></li>
      </ul>
</footer>
)

export default Footer