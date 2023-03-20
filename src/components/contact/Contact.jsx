import React from 'react';
import "./contact.css"
import  {MdOutlineEmail} from "react-icons/md"


const Contact = () => {
  return (
    <section id="contact">
     <h2>Contacto</h2>
     <div className='container contact__container'>
      <div className='contact_options'>
      <article className='contact_option'>
      <MdOutlineEmail/>
      <h4>Email</h4>
      <h5>clm12343@gmail.com</h5>
      <a href="mailto:clm12343@gmail.com">Enviar mensaje</a>
      </article>
      </div>
     </div>
    </section>
  )
}

export default Contact
