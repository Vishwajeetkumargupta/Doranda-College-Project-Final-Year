import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpeg'
import user_4 from '../../assets/user-4.jpeg'
import user_5 from '../../assets/user-5.jpeg'
import user_6 from '../../assets/user-6.jpeg'

const Testimonials = () => {

const slideForwad = () => {
    let slider = document.querySelector('.slider ul');
    let first = document.querySelector('.slider ul li:first-child');
    let last = document.querySelector('.slider ul li:last-child');
    slider.style.transition = 'all 0.5s ease-in-out';
    slider.style.transform = 'translate(-100%)';
    slider.insertBefore(last, first);
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
}
const slideBackward = () => {
    let slider = document.querySelector('.slider ul');
    let first = document.querySelector('.slider ul li:first-child');
    let last = document.querySelector('.slider ul li:last-child');
    slider.style.transition = 'none';
    slider.style.transform = 'translate(-100%)';
    slider.appendChild(first, last);
    slider.style.transition = 'all 0.5s ease-in-out';
    slider.style.transform = 'translate(0)';
} 



  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn'  onClick={slideForwad}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Vishwajeet</h3>
                                <span>Doranda College, Ranchi</span>
                            </div>
                        </div>
                        <p>The college provides a robust academic environment with a variety of courses in Arts, Science, Commerce, and vocational fields such as BBA and BCA. The curriculum is comprehensive and up-to-date, reflecting current academic and industry trends. The faculty is experienced and highly qualified, ensuring that students receive a quality education.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Upesh</h3>
                                <span>Doranda College, Ranchi</span>
                            </div>
                        </div>
                        <p>Doranda College, Ranchi, is a premier educational institution in the region. It offers a wide range of courses in Arts, Science, and Commerce, as well as professional courses such as BBA and BCA. The college has a strong academic reputation and is known for its high-quality faculty, modern facilities, and student-centered approach to education.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Shubham</h3>
                                <span>Doranda College, Ranchi</span>
                            </div>
                        </div>
                        <p>Doranda College, Ranchi, is a leading educational institution in the region. It offers a wide range of courses in Arts, Science, and Commerce, as well as professional courses such as BBA and BCA. The college has a strong academic reputation and is known for its high-quality faculty, modern facilities, and student-centered approach to education.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Shivam</h3>
                                <span>Doranda College, Ranchi</span>
                            </div>
                        </div>
                        <p>Doranda College, Ranchi, is a premier educational institution in the region. It offers a wide range of courses in Arts, Science, and Commerce, as well as professional courses such as BBA and BCA. The college has a strong academic reputation and is known for its high-quality faculty, modern facilities, and student-centered approach to education.</p>
                    </div>
                </li>
                
                
                   
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
