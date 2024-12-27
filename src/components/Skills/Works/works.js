import React from 'react'
import './Works.css'
import WorkImg1 from '../../../assets/port1.png'
import WorkImg2 from '../../../assets/port2.png'
import WorkImg3 from '../../../assets/port3.png'
import WorkImg4 from '../../../assets/port4.png'
import WorkImg5 from '../../../assets/port5.png'
import WorkImg6 from '../../../assets/port6.png'
const Works = () => {
  return (
   <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksdesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am exccited to bring my skills and experience to help business achieve their goals and create a strong online presence.
        </span>
        <div className="worksImgs">
          
            <a href="https://darshan3338.github.io/WEATHER_AP/">
                <img src={WorkImg2} alt="WorkImg2" className='worksImg'/>
            </a>

            <a href="https://darshan3338.github.io/Cofee-Menu/"><img src={WorkImg1} alt="WorkImg1" className='worksImg'/></a> 
           
            <a href="https://darshan3338.github.io/Ferris-Wheel/">
                <img src={WorkImg3} alt="WorkImg3" className='worksImg'/>
            </a>
            
            <img src={WorkImg4} alt="WorkImg4" className='worksImg'/>
            <img src={WorkImg5} alt="WorkImg5" className='worksImg'/>
            <img src={WorkImg6} alt="WorkImg6" className='worksImg'/>
       </div>
       <button className="worksBtn">
        See More
       </button>
   </section>
  )
}

export default Works
