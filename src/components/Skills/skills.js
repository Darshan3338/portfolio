import React from 'react'
import './skills.css'
import Uidesign from '../../assets/ui-design.png'
import Webdesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle"> What I Do </span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealed and user-friendly websites.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={Uidesign} alt="Uidesign" className="skillbarImg" />
                <div className="skillBarText">
                    <h2>UI/Ux Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Webdesign} alt="Webdesign" className="skillbarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillbarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
