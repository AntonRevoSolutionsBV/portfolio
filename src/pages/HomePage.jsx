import React from 'react'

import Hero from '../components/Hero'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Courses from '../components/Courses'
import Home from '../components/Home'
import Disclaimer from '../components/Disclaimer'

export default function HomePage() {
    return (
        <>

        <Home >
            <Hero />
            <Education />
            <Skills />
            <Portfolio />
            <Courses />
            
           
        </Home>
        
        </>
    )

}