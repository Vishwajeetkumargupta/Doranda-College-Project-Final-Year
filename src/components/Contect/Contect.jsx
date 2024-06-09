import React from 'react'
import './Contect.css'  // Importing css file
import msg_icon from '../../assets/msg-icon.png'  // Importing image file
import mail_icon from '../../assets/mail-icon.png'  // Importing image file
import phone_icon from '../../assets/phone-icon.png'  // Importing image file
import location_icon from '../../assets/location-icon.png'  // Importing image file
import white_arrow from '../../assets/white-arrow.png'  // Importing image file

const Contect = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "478a3bc5-10e1-4866-ae80-4e33f0400808");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    // const data = await response.json();

    if (res.success) {
      // setResult("Form Submitted Successfully");
      console.log("Success", res);
      // setResult("Thank you for contacting us. We'll get back to you soon.");
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>We love hearing from our community! If you have any questions, feedback, or need assistance, please contact us. Our team is available to help with any inquiries and provide the support you need.</p>
            <ul>
                <li> <img src={mail_icon} alt="" />info@dorandacollege.com</li>
                <li><img src={phone_icon} alt="" />+91 651-2250337</li>
                <li><img src={location_icon} alt="" />Doranda College, Opp. Sri Krishna Park, Near A.G. Colony, Ranchi Jharkhand</li>
            </ul>
            </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' required />
            <label htmlFor="">Phone Number</label>
            <input type="tel" placeholder='Enter Your Phone Number' name='phone' required />
          <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' required />
          <label htmlFor="">Your Message</label>
            <textarea name=""  rows="6" placeholder='Enter Your Message' required></textarea>
          <button className='btn dark-btn'>Send Message <img src={white_arrow} alt="" /></button>

        </form>
        <span>{result}</span>

      </div>
    </div>
  )
}

export default Contect
