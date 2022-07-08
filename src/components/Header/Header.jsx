import React from "react";
import {ReactNavbar} from "overlay-navbar"
import logo from "../../Images/logo.png"
import {FaUserAlt} from "react-icons/fa"
const Header = () => {
    return <ReactNavbar
        navColor1="black"
        navColor2="black"
        burgerColor="white"
        burgerColorHover="#ff66d9"
        logo={logo}
        logoWidth="250px"
        logoHoverColor="black"
        nav2justifyContent="space-around"
        nav3justifyContent="space-around"
        link1Text="Home"
        link2Text="About"
        link3Text="Projects"
        link4Text="Contact"
        link1url="/"
        link2url="/about"
        link3url="/projects"
        link4url="/contact"
        link1Color="#800060"
        link1ColorHover="white"
        link1Size="1.5rem"
        link1Padding="3vmax"
       // profileIcon={true}
      //  profileIconElement={FaUserAlt}

    />;
    
}

export default Header