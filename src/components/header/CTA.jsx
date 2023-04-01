import React from 'react'
import CV from "../../assets/CVLoreleyMilazzo.pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a href= {CV} download className="btn btn-primary">Descargar CV</a>
      <a href="#contact" className="btn btn-primary">Contacto</a>
    </div>
  )
}

export default CTA