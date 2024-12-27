import React, { useRef } from 'react'
import './contact.css'
import ClientImg1 from '../../../../assets/walmart.png'
import ClientImg2 from '../../../../assets/adobe.png'
import ClientImg3 from '../../../../assets/microsoft.png'
import ClientImg4 from '../../../../assets/facebook.png'

import fb from '../../../../assets/facebook-icon.png'
import tw from '../../../../assets/twitter.png'
import ins from '../../../../assets/insta.png'
import yt from '../../../../assets/youtube.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4ulnfrq', 'template_enbu65a', form.current, {
            publicKey: 'CW3W_CxbnhonjKBdB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactTitle">My Clients</h1>
            <p className="clintDesc">
                I have had the opportunity to work with a divers group of companies.
                Some of the notable companies I have worked with included
            </p>
            <div className="clintsImgs">
                <img src={ClientImg1} alt="ClientImg1" className="clientImg" />
                <img src={ClientImg2} alt="ClientImg2" className="clientImg" />
                <img src={ClientImg3} alt="ClientImg3" className="clientImg" />
                <img src={ClientImg4} alt="ClientImg4" className="clientImg" />
            </div>
        </div>

        <div id="contact">
            <h1 className='contactTitle'>Contact Me</h1> 
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>     
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="text" className="email" placeholder='Your Email' name='your_email'/>
                <textarea name="message" rows="5" placeholder='Your Message' className='msg'></textarea>
            <button type='submit' value="send" className="submitbtn">Submit</button>
                <div className="links">
                    <img src={fb} alt="fb" className="link" />
                    <img src={tw} alt="tw" className="link" />
                    <img src={ins} alt="in" className="link" />
                    <img src={yt} alt="yt" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
