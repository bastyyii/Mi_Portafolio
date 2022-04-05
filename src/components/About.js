import React, { Fragment } from 'react';
import foto from '../img/fotos/foto.jpeg';

const About = () => {
    return (  
        <div className='about' id='About'>
            <img src={foto} alt='anonimate picture'></img>
           
            <div className='about-info'>
                <h2>Sobre mi</h2>
                <div className='divider'></div>
                <p>
                    Mi nombre es Bastian Valdivia, recien titulado en la carrera de ingenieria en informatica.
                    Durante mis años de estudio pude obtener conocimientos de diferentes areas de esta carrea 
                    tales como redes, base de datos, y desarrollo web. Es en esta ultima area
                    en la que quise enfocar mi tiempo de estudio para convertirme en desarrollador web FullStack
                </p>
                <p>
                    Soy una persona autodidacta, con mucho deseo por aprender, adquirir nuevos conocimientos
                    y volverme un mejor profesinal, por esto, para el desarrollo frontend aprendi a trabajar 
                    con el lenguaje de JavaScript y la libreria de React, principalmente con Redux, ademas de 
                    CSS y HTML. En cuanto al desarrollo del backend principalmente utilizo NodeJs y MongoBD. 
                </p>
                <button className='download-read'>Leer mas</button>
            </div>
        </div>
    );
}
 
export default About;