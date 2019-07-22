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
      </ul>
</footer>
)

export default Footer