import React from 'react'
import './Campus.css'
import Gallery_1 from '../../assets/gallery-1.jpg'
import Gallery_2 from '../../assets/gallery-2.jpg'
import Gallery_3 from '../../assets/gallery-3.jpg'
import Gallery_4 from '../../assets/gallery-4.jpg'
import Gallery_5 from '../../assets/gallery-5.jpg'
import Gallery_6 from '../../assets/gallery-6.jpg'
import Gallery_7 from '../../assets/gallery-7.jpg'
import Gallery_8 from '../../assets/gallery-8.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery" >
        <img src={Gallery_1} alt="" />
        <img src={Gallery_2} alt="" />
        <img src={Gallery_8} alt="" />
        <img src={Gallery_3} alt="" />
        <img src={Gallery_4} alt="" />
        <img src={Gallery_5} alt="" />
        <img src={Gallery_6} alt="" />
        <img src={Gallery_7} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
