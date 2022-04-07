import React, { Fragment } from 'react';
import saludo from '../img/fotos/saludo.PNG'

const Aboutme = () => {
    return (  
       <Fragment>
        <div className='info-content' id='Home'>
            <h2>Hola! yo soy <span>Bastian </span>Valdivia</h2>
            <p>Soy un apasionado de la progrmacion web, tanto de frontend como de backend
               y con este pequeño portafolio espero poder mostrarte algunas de mis habilidades,
               espero que te guste ;) 
            </p>
        </div>
        <img src={saludo} alt='Anonimate picture'></img>
       </Fragment>
    );
}
 
export default Aboutme;