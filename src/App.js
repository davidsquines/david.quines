import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/navbar';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Home from './components/Home/home';




const App = () => {
  return(
    <>
      <Router>
        <Navbar/>
  
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact'  element={<Contact/>} />
          
        </Routes>
      </Router>

      
    </>

  );
}
export default App;