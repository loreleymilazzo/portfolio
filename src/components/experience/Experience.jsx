import React from 'react';
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"


const Experience = () => {
  return (
    < section id="experience">
     
     <h2> Skills </h2>

     <div className="container experience__container">
      <div className="experience__frontend">
      <h3> Frontend</h3>
      <div className="experience__content">
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> HTML </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> CSS </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> JavaScript </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> Boostrap </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> Tailwind </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> React </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> Redux  </h4>
        </div>
        </article>

      </div> 
      </div>
      <div className="experience__backend">
      <h3> Backend</h3>
      <div className="experience__content">
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> Node JS </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> SQL </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> Postgres </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> Sequelize </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> Express </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> Mongo DB </h4>
        </div>
        </article>
        <article className="experience_details">
        <BsPatchCheckFill className= "experience_details-icon"/>
        <div>
        <h4> Python  </h4>
        </div>
        </article>

      </div>
        </div>
     </div>
      </section>
  )
}

export default Experience