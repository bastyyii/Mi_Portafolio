import React from 'react';
import op from '../img/icons/op.png';

const Header = () => {
    return ( 
        <header>
            <nav className='navbar'>
                <div className='brand'>
                    <h2>B<span>V</span></h2>
                </div>
                <input type='checkbox' id='check'/>
                <label htmlFor='check' className='checkbtn'>
                    <img src={op} alt='Icono de opciones' />
                </label>
                <ul className='menu'>
                    <li className='active'><a href='#Home'>Inicio</a></li>
                    <li className='active'><a href='#About'>Sobre mi</a></li>
                    <li className='active'><a href='#Tools'>Herramientas</a></li>
                    <li className='active'><a href='#Port'>Portafolio</a></li>
                    <li className='active'><a href='#Contact'>Contactos</a></li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;