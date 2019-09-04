import {Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ImageLogo from "../components/logo"
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
          display:'flex',
          opacity: 0.95,
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
      <a href="/#top">Home</a>,    
      <a href="#about">About Revolut</a>,
      <a href="#services">Revolut services 2019</a>,
      <a href="#options">Card options</a>,
      <a href="#app">Revolut App – Sign up & Link Payment Method</a>,
      <a href="#casinos">Revolut & Online Casinos</a>,
      <a href="#crypto">Revolut & Cryptocurrencies</a>,
      <a href="#conclusion">Conclusion</a>,
      <a href="#faqs">FAQS</a>
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
   <nav>
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
      <a href="/#top">Home</a>    
      <a href="#about">About Revolut</a>
      <a href="#services">Revolut services in 2019</a>
      <a href="#options">Card options</a>
      <a href="#app">Revolut App – Sign up & Link Payment Method</a>
      <a href="#casinos">Revolut & Online Casinos</a>
      <a href="#crypto">Revolut & Cryptocurrencies</a>
      <a href="#conclusion">Conclusion</a>
      <a href="#faqs">FAQS</a>
      </div>
    </div>
    </nav>
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

