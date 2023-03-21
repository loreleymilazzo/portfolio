
import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/healthyapp.png";
import IMG2 from "../../assets/countriesapp.png";
import IMG3 from "../../assets/wheatherapp.png";

const Portfolio = () => {
  return (
    < section id="portfolio">

    <h2>Mis proyectos</h2>
    <div className="container portfolio__container">
      <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img  src={IMG1} alt=""/>
      </div>
      <h3>Healthy Market app</h3>
      <a href="https://github.com/loreleymilazzo/Healthy-Market-App" className='btn'>Github</a>
      <a href="https://healthy-market-app.vercel.app/" className='btn btn-primary' >Deploy</a>
      </article>
      <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img  src={IMG2} alt=""/>
      </div>
      <h3>Countries app</h3>
      <a href="https://github.com/loreleymilazzo/PI_HENRY_COUNTRIES" className='btn'>Github</a>
      <a href="https://pi-henry-countries-three.vercel.app/" className='btn btn-primary' >Deploy</a>
      </article>
      <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img  src={IMG3} alt=""/>
      </div>
      <h3>Weather app</h3>
      <a href="https://github.com/loreleymilazzo/weather-app" className='btn'>Github</a>
      <a href="https://weather-app-one-green.vercel.app/" className='btn btn-primary' >Deploy</a>
      </article>

    </div>
    </section>
  )
}

export default Portfolio