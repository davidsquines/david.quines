import React, {useRef} from 'react'
import emailjs from "emailjs-com"
import Swal from 'sweetalert2'
import './contact.css'
import * as FaIcons from "react-icons/fa";
import resume from "../../assets/docs/DavidQuinesResume9-6.pdf"

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      serviceID,
      templateID,
      form.current,
      userID
    ).then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message sent successfully'
      })
    }, (error) => {
      console.log("hit");
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Oops, something went wrong',
        text: error.text
      })
    });
    e.target.reset();
  };
  return (
    <div className='contact-wrapper'>
      <h2>Let's Get Connected</h2>
      <p>I am interested in Fullstack development. Feel free to use the form to contact me about oppurtunities or just to say hello. I will try to get back to you as soon as possible</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name"/>     
        <label>Email</label>
        <input type="email" name="user_email"/>
        <label>Message</label>
        <textarea name="message"/>
        <button type="submit" className='submit-button'>Send Message</button>
        
      </form>
      <div className='icon-list'>
        <ul>
          <li><a href="https://github.com/davidsquines" target="_blank"><FaIcons.FaGithub/></a></li>
          <li><a href="https://www.linkedin.com/in/david-quines7/" target="_blank"><FaIcons.FaLinkedin/></a></li>
          <li><a href="https://www.instagram.com/dsqsfl/" target="_blank"><FaIcons.FaInstagram/></a></li>
          <li><a href={resume} target="_blanl"><FaIcons.FaFile/></a></li>
        </ul>

      </div>

    </div>
  
  )
}

export default Contact