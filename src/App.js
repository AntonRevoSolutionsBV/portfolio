import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Skills from './components/Skills.js'
import Portfolio from './components/Portfolio.js';
import Courses from './components/Courses.js';
import Education from './components/Education.js';
import Disclaimer from './components/Disclaimer.js';
import Home from './components/Home.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const GlobalContext = React.createContext(true);


function App() {

  const [page, setPage] = React.useState('HomeState')
  function switchPage(input) {
    setPage(input)
    console.log(`page switched to ${input}`)
  }
  
  return (
    
    
     
     
    <GlobalContext.Provider value={{page, switchPage}} >
        <Navbar/>
        <Home>
        <Hero />
        <Education />
        <Skills />
        <Portfolio />
        <Courses />
        <Disclaimer />
      </Home>
    </GlobalContext.Provider>


     

    

    
  

  );
}

export default App;
