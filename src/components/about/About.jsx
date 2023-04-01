import React from "react";
import "./about.css";
import yo from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h2>Sobre mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={yo} alt="About Img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experiencia</h5>
              <small>Bootcamp Henry 
                <br/>
              Codo a Codo
              </small>
            </article>

             <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Proyecto</h5>
              <small>https://healthy-market-app.vercel.app/ </small>
            </article> 
          </div>
          <p>
          Soy Loreley, desarrolladora Full Stack con una pasión por el Frontend y un gran interés en el diseño UX/UI. Recientemente me gradué del bootcamp SoyHenry, donde invertí más de 800 horas en la creación de proyectos tanto individuales como en equipo.
          <br/>
          Actualmente me encuentro en busca de mi primer empleo en el área IT. 


          </p>
          {/* <a href="#contact" className="btn btn.primary">
            {" "}
            Contactame{" "}
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default about;
