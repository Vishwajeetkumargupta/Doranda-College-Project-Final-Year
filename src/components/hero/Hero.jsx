import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Education needs complete solution</h1>
        <p>Any successful career starts with advanced higher education.At our understanding, you will have a deeper knowledge of the subjects that will be particularly useful when climbing the career ladder1..</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
