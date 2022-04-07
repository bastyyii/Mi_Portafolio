import React from 'react';
import git from '../img/icons/gitHub.png'
import pro from '../img/icons/pro.png';
import clima from '../img/port/clima.png';
import restaurant from '../img/port/restaurant.png';
import citas from '../img/port/citas.png';
import bre from '../img/port/breaking.PNG';
import cripto from '../img/port/cripto.png';

const Port = () => {
    return (  
        <div className='port' id='Port'>
            <div className='port-headings'>
                <h2>Portafolio de Proyectos</h2>
                <div className='divider wit'></div>
            </div>
            <div className='contt'>
                <div className='cardd'>
                    <div className='card-img'>
                        <img className='card-img' alt='Imagen api criptomonedas' src={cripto}/>
                    </div>
                    <div className='card-title'>
                        <h2>criptomonedas</h2>
                    </div>
                    <div className='port-links'>
                        <a href='https://github.com/bastyyii/Api-valor-criptomonedas'>
                            <img className='icons-git' alt='imagen icono de git' src={git} />
                            <br></br>
                            Codigo
                        </a>
                        <a href='https://mellifluous-pithivier-1b7fae.netlify.app/'>
                            <img className='icons-git' alt='imagen icono de proyecto' src={pro}/>
                            <br></br>
                            Link
                        </a>
                    </div>
                </div>
                <div className='cardd'>
                    <div className='card-img'>
                        <img className='card-img' alt='Imagen api restaurant' src={restaurant}/>
                    </div>
                    <div className='card-title'>
                        <h2>Api Restaurants</h2>
                    </div>
                    <div className='port-links'>
                        <a href='https://github.com/bastyyii/FrontEnd_Restaurants_Redux'>
                            <img className='icons-git' alt='imagen de icono de git' src={git} />
                            <br></br>
                            Front
                        </a>
                        <a href='https://github.com/bastyyii/Servidor_Restaurant'>
                            <img className='icons-git' alt='imagen de icono de git' src={git} />
                            <br></br>
                            Back
                        </a>
                        <a href='https://ubiquitous-torrone-774ef9.netlify.app/'>
                            <img className='icons-git' alt='imagen de icono de proyecto' src={pro}/>
                            <br></br>
                            Link
                        </a>
                    </div>
                </div>
            </div>
            <div className='contt'>
                <div className='cardd'>
                    <div className='card-img'>
                        <img className='card-img' alt='Imagen de api de citas' src={citas}/>
                    </div>
                    <div className='card-title'>
                        <h2>Citas mascotas</h2>
                    </div>
                    <div className='port-links'>
                        <a href='https://github.com/bastyyii/Api_cita_mascotas'>
                            <img className='icons-git' alt='imagen de icono de git' src={git} />
                            <br></br>
                            Codigo
                        </a>
                        <a href='https://fabulous-phoenix-492088.netlify.app/'>
                            <img className='icons-git' alt='imagen de icono de proyecto' src={pro}/>
                            <br></br>
                            Link
                        </a>
                    </div>
                </div>
                <div className='cardd'>
                    <div className='card-img'>
                        <img className='card-img' alt='Imagen api clima' src={bre}/>
                    </div>
                    <div className='card-title'>
                        <h2>Frases B.Bad</h2>
                    </div>
                    <div className='port-links'>
                        <a href='https://github.com/bastyyii/Api_Frases_Breaking_Bad'>
                            <img className='icons-git' alt='imagen icono de git' src={git} />
                            <br></br>
                            Codigo
                        </a>
                        <a href='https://dapper-melba-01df62.netlify.app/'>
                            <img className='icons-git' alt='imagen icono de proyecto' src={pro}/>
                            <br></br>
                            Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Port;