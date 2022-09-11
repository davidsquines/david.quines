import React from 'react'
import './home.css'
import TextLoop from "react-text-loop";
import * as FaIcons from "react-icons/fa";
import resume from "../../assets/docs/DavidQuinesResume9-6.pdf"


const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='home-info-container'>
    
        <h1>Hi, <br/> I'm David Quines, <br/>
          <TextLoop interval={2400} className="text-loop">
            <span>Fullstack Engineer</span>
            <span>UI Designer</span>
            <span>Problem Solver</span>
          </TextLoop>
        </h1>
        <ul className='home-icon-list'>
          <li><a href="https://github.com/davidsquines" target="_blank"><FaIcons.FaGithub/></a></li>
          <li><a href="https://www.linkedin.com/in/david-quines7/" target="_blank"><FaIcons.FaLinkedin/></a></li>
          <li><a href="https://www.instagram.com/dsqsfl/" target="_blank"><FaIcons.FaInstagram/></a></li>
          <li><a href={resume} target="_blank"><FaIcons.FaFile/></a></li>
        </ul>

      </div>

    </div>
  )
}

export default Home