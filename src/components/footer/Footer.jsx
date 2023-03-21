import React from 'react'
import './footer.css'

const footer = () => {
    return (
        <footer>
            <a href='#' className='footer_logo'>Loreley Milazzo</a>

            <ul className='permalinks'>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#about'>Sobre mí</a></li>
                <li><a href='#experience'>Experiencia</a></li>
                <li><a href='#services'>Servicios</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contacto</a></li>
            </ul>

            <div className='footer_copyright'>
                <small>&copy; Loreley Milazzo, FullStack Web Developer. </small>
            </div>
        </footer>
    )
}

export default footer