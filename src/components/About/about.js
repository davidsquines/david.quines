import React from 'react'
import profilePic from "../../assets/images/profilePic.jpg"
import './about.css'
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const About = () => {
    return (
        <>
            <div className='about-wrapper'>
                <div className='about-content-container'>

                        <div className='row'>
                            <div className='column text'>
                                <img src={profilePic} className='profile-pic'/>
                                
                            </div>
                            <div className='column text'>
                                <h1>Me, Myself, and I</h1>
                                <p>Software Engineer with a focus in Full-Stack Development based in Burbank, California. I have worked multiple web and mobile applications. I am passionate about creating applications that are fun and user friendly</p>
                                <p>Self-driven and goal-oriented person, an ambtious worker with high attention to detail. Fan of anime, powerbuilding, esports, and philosphical literature.</p>
                                <p>Interested in backend, frontend, and devops development and working on projects with positive and open minded people</p>
                                <div className='link-cover'>
                                <Link to={"/contact"} >Let's build something</Link>
                                </div>
                            </div>
                        </div>

        
                    <div className='row'>
                        <div className='column text'>
                            <h1>Education</h1>
                            <p>California State University - Northridge | 2017 - 2021 | 3.53 Cum Laude</p>
                            <h1>Awards</h1>
                                <ul className='awards-list'>
                                    <li>2021 First Place Winner of CSUN Senior Design SHowcase Project - EureQa</li>
                                    <li>2021 MataHacks First Place Winner for Best Project - EureQa</li>
                                </ul>
                            </div>
                            <div className='column text'>
                            <h1>Current Technologies</h1>
                                <ul className='icon-list'>
                                    <li><FaIcons.FaReact/></li>
                                    <li><FaIcons.FaNodeJs/></li>
                                    <li><FaIcons.FaAws/></li>
                                    <li><FaIcons.FaJava/></li>
                                </ul>
                            </div>
                            
                        </div>
                    
                    
                </div>
            </div>


        </>
    
    
    );
}

export default About