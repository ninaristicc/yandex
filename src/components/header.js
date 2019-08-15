import {Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImageLogo from "../components/logo"
import ImageImg from "../components/imgimg"
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';
import Menu from './Menu';

//const Header = ({getRevolut}) => (
class  Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
    }
  }
  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }
  render() {
    const { getRevolut } = this.props;

    const styles= 
      {
        container:{
          position: 'fixed',
          top: 0,
          textAlign: 'right',
          left: 0,
          zIndex: '99',
          opacity: 0.9,
          display:'flex',
          alignItems:'center',
          background: '#E0F8F1',
          width: '100%',
        },
        logo: {
          maxWidth: '200px',
          position: 'fixed',
          top: '10px',
          left: '10px',
          width: '200px',
          overflow: 'hidden',
          zIndex: '100',
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          filter: this.state.menuOpen ? 'blur(2px)':null,
          transition: 'filter 0.5s ease',
        },
      }
    const menu = [
    <a class="underline" href="/#top">Test</a>,    
    <a class="underline" href="#ewallet">What Is An eWallet?</a>,
    <a class="underline" href="#generaluse">Top-Rated eWallet For General Use</a>,
    <a class="underline" href="#casinos">Best eWallets for Online Casinos & Gambling</a>
  ]
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
    });


    return (
  <header>
   
    <div>
        <div style={styles.container}>
          <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='black'/>
          <div style={styles.logo}><ImageLogo /></div>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
        
    </div>     

    <div style={styles.container}>
    <div style={styles.logo}><ImageLogo /></div>
      <div class="menu">
      <a  href="/#top">Test</a>
    <a  href="#ewallet">What Is An eWallet?</a>
    <a  href="#generaluse">Top-Rated eWallet For General Use</a>
    <a  href="#casinos">Best eWallets for Online Casinos & Gambling</a>
      </div>
    </div>
{/*<nav id="ham-navigation" class="ham-menu">
    <div style={{margin: `0`, maxWidth: 200}}>     
      <div class="logo-style">
      <Link to="/"> <ImageLogo /></Link></div>
    </div>
    <div class="nav">
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle"/>
      <div class="menu">
     <a class="underline" href="/testpage/#top">Test</a>
    <a class="underline" href="#ewallet">What Is An eWallet?</a>
    <a class="underline" href="#generaluse">Top-Rated eWallet For General Use</a>
    <a class="underline" href="#casinos">Best eWallets for Online Casinos & Gambling</a>
    {/* <a href="#location">Location</a> */}
    {/* <a href="/yandex/">Yandex</a>    
    <a href="/other/">Other</a>  
    <a href="/ecopayz/">EcoPayz</a>  
    <a href="/skrill/">Skrill</a>  
    <a href="/neteller/">Neteller</a>  
    <a href="/blog/">Blog/News</a>   */}
    {/*</div>
    </div>
  </nav>*/}
  </header>
    )
  }
}
//)




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `getRevolut`,
}
export default Header

