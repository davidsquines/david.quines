import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './navbar.css'

import * as FaIcons from "react-icons/fa";
import resume from "../../assets/docs/DavidQuinesResume9-6.pdf"




const Navbar = () => {

const [isNavExpanded, setIsNavExpanded] = useState(false);


return (
  <>
    <nav className='navigation'>
      <Link to="/" className='logo' >
        DQ.
      </Link>
      <button
        className='menu-bars'
        onClick={() => setIsNavExpanded(!isNavExpanded)}>
          <FaIcons.FaBars/>
      </button>
      <div className={isNavExpanded ?  "nav-menu expanded" : "nav-menu"}>
        <ul>
          <li><Link to='/about' onClick={() => setIsNavExpanded(!isNavExpanded)}>01. About</Link></li>
          <li><Link to='/projects' onClick={() => setIsNavExpanded(!isNavExpanded)}>02. Projects</Link></li>
          <li><Link to='/contact' onClick={() => setIsNavExpanded(!isNavExpanded)}>03. Contact Me</Link></li>
          <li><Link to={resume} target="_blank" onClick={() => setIsNavExpanded(!isNavExpanded)}>04. Resume</Link></li>
        </ul>
        

      </div>


    </nav>
    
    
  </>
);

}

export default Navbar
