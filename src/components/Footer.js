import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import git from '../img/contacts/git.png'
import gmail from '../img/contacts/gml.png'
import lin from '../img/contacts/lin.png'

const Footer = () => {
    return (  
        <Fragment>  
            <div className='footer-content'>
                <h5>Bastian Valdiva Full Stack</h5>
            </div>
            <div className='social-network'>
                <section className='section-contact'>
                    <div className='section-div'>
                        <img src={git}></img>
                    </div>
                    <div className='section-div'>
                        <img className='imgmail' src={gmail}></img>
                    </div>
                    <div className='section-div'>
                        <img className='imgmail' src={lin}></img>
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
