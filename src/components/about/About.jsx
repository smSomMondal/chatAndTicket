import React from 'react'
import './eco.css'
// import { } from './img/'

function About() {
  return (
    <div class="instructionbg">
        <div class="instructionheading">
            <h1>Eco-Friendly Museum Instructions</h1>
        </div>
        <div class="conflue-info">
    <div class="conflue-part">
        <div class="conflue-part-content event-content">
            <h2>Sustainable Building Materials</h2>
            <p>
                Use eco-friendly materials like recycled steel, bamboo, or reclaimed wood for construction and renovations.
            </p>
        </div>
        <div class="conflue-part-image-box">
            <img src={require("./img/1.jpg")} alt="Sustainable Building Materials" />
        </div>
    </div>

    <div class="conflue-part">
        <div class="conflue-part-image-box">
            <img src={require("./img/2.jpg")} alt="Energy Efficiency" />
        </div>
        <div class="conflue-part-content backdrop-content">
            <h2>Energy Efficiency</h2>
            <p>
                Install energy-efficient lighting such as LED bulbs, and utilize natural light wherever possible. Solar panels can also be installed to power the museum.
            </p>
        </div>
    </div>

    <div class="conflue-part">
        <div class="conflue-part-content art-gallery-content">
            <h2>Waste Management</h2>
            <p>
                Establish a recycling program for paper, plastic, and other materials. Compost organic waste from museum cafes or events.
            </p>
        </div>
        <div class="conflue-part-image-box">
            <img src={require("./img/3.jpg")} alt="Waste Management" />
        </div>
    </div>

    <div class="conflue-part">
        <div class="conflue-part-image-box">
            <img src={require("./img/4.png")} alt="Eco-friendly Transportation" />
        </div>
        <div class="conflue-part-content backdrop-content">
            <h2>Eco-friendly Transportation</h2>
            <p>
                Encourage visitors to use public transport, bicycles, or carpooling by offering discounts or incentives.
            </p>
        </div>
        
    </div>

    <div class="conflue-part">
        <div class="conflue-part-content art-gallery-content">
            <h2>Digitalization</h2>
            <p>
                Encourage digital ticketing and brochures to reduce paper waste.
            </p>
        </div>
        <div class="conflue-part-image-box">
            <img src={require("./img/5.jpg")} alt="Digitalization" />
        </div>
    </div>
</div>
        

    </div>
  )
}

export default About