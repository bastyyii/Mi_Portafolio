import React, { Fragment } from 'react';
import foto from '../img/fotos/foto2.jpeg'

const Aboutme = () => {
    return (  
       <Fragment>
        <div className='info-content' id='Home'>
            <h2>Hola yo soy <span>Bastian </span>Valdivia</h2>
            <p>Soy un apasionado de la progrmacion web, tanto de frontend como de backend
               y con este pequeño portafolio espero que poder mostrarte algunas de mis habilidades
               espero que te guste ;) 
            </p>
            <a download href='#'>
                <button className='download-cv' download=''>
                    Descarga mi CV
                </button>
            </a>
        </div>
        <img src={foto} alt='Anonimate picture'></img>
       </Fragment>
    );
}
 
export default Aboutme;