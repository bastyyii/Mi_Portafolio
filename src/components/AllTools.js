import React from 'react';

import reactimage from '../img/tools/react.png'
import js from '../img/tools/js.png'
import mongo from '../img/tools/mongo.png'
import node from '../img/tools/node.png'
import express from '../img/tools/express.png'
import redux from '../img/tools/reduxthunk.png'

const AllTolls = () => {
    return ( 
        <div className='Tools' id='Tools'>
            <div className='tools-title'>
                <h2>Herramientras Principales</h2>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="element-tool2" src={reactimage} alt="React"/>

                    </div>
                    <div class="carousel-item">
                        <img class="element-tool" src={js} alt="Java Script"/>
                    </div>
                    <div class="carousel-item">
                        <img class="element-tool" src={mongo} alt="Mongo BD"/>
                    </div>
                    <div class="carousel-item">
                        <img class="element-tool3" src={node} alt="Node Js"/>
                    </div>
                    <div class="carousel-item">
                        <img class="element-tool" src={express} alt="Express"/>
                    </div>
                    <div class="carousel-item">
                        <img class="element-tool" src={redux} alt="Redux"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div> 
    );
}
 
export default AllTolls;