import React from 'react'
import './Hero.css'
import hero from '../../assets/hero-plant.png'
import alena from '../../assets/aleena-image.png'

const Hero = () => {
  return (
    <section id="home" className="hero-wrapper">
      <main className='main'>
        <div className='text'>
          <h2>Breath Natural</h2>
          <p>Surround yourself with the refreshing touch of nature and breathe in pure, clean air. Plants not only beautify your space but also uplift your mood and promote well-being.</p>
          <button className='btn'>Explore</button>
        </div>
<div className='hero-image'>
  <img src={hero} alt="" />
  <p className="plant-label">Trendy House Plant</p>
  <h3 className="plant-name">Calathea plant</h3>
  <button className="plant-btn">Buy Now</button>
</div>
      </main>

      <div className="alina-box">
        <div className="alina-header">
          <img src={alena} alt="Alina Patel"  className="alina-avatar" />
          <div>
            <p className="alina-name">Alina Patel</p>
            <div className="alina-stars">★★★★☆</div>
          </div>
        </div>
        <p className="alina-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
        </p>
      </div>
    </section>
  )
}

export default Hero