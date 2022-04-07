import React from 'react';

const Contact = () => {
    return (  
        <div className='contact-section' id='Contact'>
            <div className='contact-heding'>
                <h2>Contactame</h2>
                <div className='divider cont'></div>
            </div>
            
            <div className='container-contact'>
                <div className='contact-form'>
                    <h4>Enviame un mensaje</h4>
                    <form className='form'>
                        <input type='text' placeholder='name'/>
                        <input type='email' placeholder='email'/>
                        <textarea placeholder='Escribeme lo que deseas'>
                        </textarea>
                        <button type='submit' className='btn-submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;