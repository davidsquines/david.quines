import React from 'react'
import './projects.css'

import gotGainsVid from "../../assets/videos/gotgains.mp4";
import eureqaVid from "../../assets/videos/eureqavideo.mp4"
import chorosx from "../../assets/videos/chorosX.mp4"
import * as FaIcons from "react-icons/fa";
import dAttack from "../../assets/images/dictattack.png"
import loadingPic from "../../assets/images/comingsoon.jpg"




const Projects = () => {
  return (
    <div className="projects-wrapper">

      <h1 style={{fontSize: "35px", color:"#FFFFFF"}}>Projects</h1>
      <p style={{fontSize: "21px", color:"#FFFFFF"}}>Here are some of the projects I have developed</p>
     
        <div className='projects-card'>
          <div className='row'>
            <div className='column left'>
              <video className='video'  loop muted src={gotGainsVid}/>
            </div>
            <div className='column right'>
              <h2>Got Gains</h2>
              <p>A fitness mobile application designed to help users with thier workout journey.</p>
              <p className='technologies'>Built using Flutter</p>
              <a href="https://github.com/davidsquines/GotGainz" target="_blank" className='code-icon'><FaIcons.FaCode/></a>
            </div>
          </div>
        </div>

 
        <div className='projects-card'>
          <div className='row'>
            <div className='column right'>
              <h2>EureQa</h2>
              <p>A fitness mobile application designed to help users with thier workout journey.</p>
              <p className='technologies'>Fluter | Springboot | AWS | MongoDB</p>
              <a href="https://github.com/ProjectEureka" target="_blank" className='code-icon'><FaIcons.FaCode/></a>
            </div>
            <div className='column left'>
              <video className='video' autoPlay loop muted src={eureqaVid}/>
            </div>
          </div>
        </div>

        <div className='projects-card'>
          <div className='row'>
            <div className='column left'>
              <video className='video' autoPlay loop muted src={chorosx}/>
            </div>
            <div className='column right'>
              <h2>ChorosX</h2>
              <p>A live satellite tracking web application that shows the real time postions of satellites in orbit</p>
              <p className='technologies'>React.js | Flask | Firebase</p>
              <a href=" https://github.com/ChorosX" target="_blank" className='code-icon'><FaIcons.FaCode/></a>
            </div>
          </div>
        </div>
        <div className='projects-card'>
          <div className='row'>
            <div className='column right'>
              <h2>Dictionary Attack</h2>
              <p>A word finder web game</p>
              <p className='technologies'>React.js | Node.js | Mongo DB | Netlify</p>
              <a href="https://github.com/Dictionary-Attack" target="_blank" className='code-icon'><FaIcons.FaCode/></a>
              
            </div>
            <div className='column left'>
              <img src={dAttack} className="image"/>
            </div>
          </div>
        </div>

        <div className='projects-card'>
          <div className='row'>
            <div className='column left'>
              <img src={loadingPic} className="image"/>
            </div>
            <div className='column right'>
              <h2>Eleos</h2>
              <p>An artificial intelligence virtual desktop assitant made to assist users on thier desktop </p>
              <p className='technologies'>Python | Speech Recognition</p>
              <a href="https://github.com/davidsquines/Eleos" target="_blank" className='code-icon'><FaIcons.FaCode/></a>
            </div>
          </div>
        </div>
      
    </div>
  
  );
}


export default Projects