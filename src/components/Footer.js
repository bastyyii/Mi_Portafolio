import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import git from '../img/contacts/git.png'
import gmail from '../img/contacts/gml.png'
import lin from '../img/contacts/lin.png'

const Footer = () => {
    return (  
        <Fragment>  
            <div className='footer-content' id='Contact'>
                <h5>Bastian Valdiva Full Stack</h5>
            </div>
            <div className='social-network'>
                <section className='section-contact'>
                    <div className='section-div'>
                        <a href='https://github.com/bastyyii'>
                            <img  className='imgit' src={git}></img>
                        </a>
                    </div>
                    <div className='section-div'>
                        <a href='mailto:bastivaldi15@gmail.com'>
                        <img className='imgmail' src={gmail}></img>
                        </a>
                    </div>
                    <div className='section-div'>
                        <a href='https://cl.linkedin.com/in/bastian-valdivia-b61b75236?trk=people-guest_people_search-card'>
                            <img className='imgmail' src={lin}></img>
                        </a>
                    </div>
                </section>
            </div>
            <div className='end'>
                <h8>Desarrollado por Bastian Valdivia 2022
                </h8>
            </div>
        </Fragment>
    );
}
 
export default Footer;
