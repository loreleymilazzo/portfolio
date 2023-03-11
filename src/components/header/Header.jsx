import React from 'react';
import  "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.jpg"
import HeaderSocial from "./HeaderSocials"

const Header = () => {
  return (
    <header>
        <div className="container header__container"> 
       <h5>Hola! Yo soy</h5>  
       <h1>Loreley Milazzo</h1>
       <h5 className= "text-light"> Fullstack Developer</h5>
       <CTA/>
       <HeaderSocial/>

       <div className="me">
        <img src={ME} alt="me" />
       </div>

       <a href="#contact" className=" scroll__down"> Seguí desplazando hacia abajo</a>
        </div>
    </header>
  )
}

export default Header