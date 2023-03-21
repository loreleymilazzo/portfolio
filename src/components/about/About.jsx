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
              <h5> Proyectos</h5>
              <small> + 4</small>
            </article>
          </div>
          <p>
            
            Soy Full Stack Developer con una inclinación especial hacia el frontend y un gran interés en el diseño UX UI. 
            Recientemente graduada del bootcamp soyHenry con más de 800 hs de código. Pude desarrollar proyectos tanto individuales como grupales.
          </p>
          <a href="#contact" className="btn btn.primary">
            {" "}
            Contactame{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
