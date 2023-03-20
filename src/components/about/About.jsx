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
              <small>Graduada del bootcamp Henry</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Proyectos</h5>
              <small> Individuales y en grupo</small>
            </article>
          </div>
          <p>
            
             Soy Full Stack Developer con una inclinación
            especial hacia el frontend y un gran interés en el diseño UX/UI. Me
            gradué de un bootcamp de más de 800 horas de código en Henry, donde
            aprendí a trabajar en equipo y a desarrollar soluciones innovadoras
            para desafíos reales en el mundo de la tecnología. 
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
