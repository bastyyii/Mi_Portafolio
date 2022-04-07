import React from 'react';

import css from '../img/tools/css.png'
import html from '../img/tools/html.png'
import java from '../img/tools/java.png'
import php from '../img/tools/php.png'

const AllTollsSecondary = () => {
    return ( 
        <div className='Tools'>
            <div className='tools-secondary-title'>
                <h2>Herramientras Secundarias</h2>
            </div>
            <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="element-tool-secondary2" src={css} alt="css"/>

                    </div>
                    <div class="carousel-item">
                        <img class="element-tool-secondary" src={html} alt="html"/>
                    </div>
                    <div class="carousel-item">
                        <img class="element-tool-secondary" src={java} alt="java"/>
                    </div>
                    <div class="carousel-item">
                        <img class="element-tool-secondary2" src={php} alt="php"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div> 
    );
}
 
export default AllTollsSecondary;