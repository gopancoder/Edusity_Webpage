import React from 'react'
import '../Hero/Hero.css'
import dark_arrow from '../../Assets/dark-arrow.png'

export default function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge,skills and experiences needed to excel in the dynamic feild of education</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}
