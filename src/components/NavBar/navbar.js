import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
    const  [showMenu,setshowMenu]=useState(false)
  return (
    
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo'/>

            <div className="deskMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="deskMenuListItem" onClick={()=>setshowMenu(!showMenu)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className="deskMenuListItem" onClick={()=>setshowMenu(!showMenu)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="deskMenuListItem" onClick={()=>setshowMenu(!showMenu)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="deskMenuListItem" onClick={()=>setshowMenu(!showMenu)}>clients</Link>

            </div>


            <button className="deskMenubtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} alt="" className="deskMenuImg" /> Contact Me </button>

                <img src={menu} alt="/menu" className='mobMenu' onClick={()=>setshowMenu(!showMenu)}/>

            <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className="listItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="listItem">clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Contact </Link>
            </div>
        </nav>
    
  )
}

export default Navbar
