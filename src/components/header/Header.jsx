import React from 'react';
import  "./header.css"
import CTA from "./CTA"
import ME from "../../assets/notebook.webp"
import HeaderSocial from "./HeaderSocials"

const Header = () => {
  return (
    <header>
        <div className="container header__container"> 
       <h3>¡Hola! </h3>  
       
       <h1> Soy Loreley Milazzo</h1>
       <h5 className= "text-light"> Fullstack Developer</h5>
       <CTA/>
       <HeaderSocial/>
       <div className="me">
        <img src={ME} alt="me" />
       </div>

       <a href="#contact" className=" scroll__down">  Scroll Down</a>
        </div>
    </header>
  )
}

export default Header