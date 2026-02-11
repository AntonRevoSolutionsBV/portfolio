import './ContactPage.css'
import '../components/AAGeneral.css'
import phonePic from '../media/phone.png'
import contact from '../media/contact.png'
import background from '../media/train.jpg';
import linkedinIco from '../media/linkedin.png'
import telephoneIco from '../media/phone.png'
import mailIco from '../media/email5.png'
import homeIco from '../media/circle.png'

import React from 'react'

export default function ContactPage() {
    return (
        <>
        <div className='contact-container'>
        <div className='contact-top'>
           
        
        </div>
       <div className='contact-bottom'>
            <div className='contact-bottom-left'>
                <h1>Get <span className='black'>in </span> 
               
                <span className='black'>touch</span>
                
                </h1>


            </div>

            <div className='contact-bottom-right'>
                <h2 className='contact-header'>Contact Information</h2>
                
                <p className='contact-p'><img src={homeIco}></img>RevoSolutions BV, Rietstraat 7C, 8430 Middelkerke, Belgium </p>
                <p className='contact-p'><img src={telephoneIco}></img>+32 488 49 87 14</p>
                <p className='contact-p'><img src={mailIco}></img>anton@revosolutions.be</p>
                <p className='contact-p'><img src={linkedinIco}></img>LinkedIn</p>



            </div>
      




       </div>
        </div>
        <div className='contact-close'></div>  

            
           
        </>
    )   


}


/* 

<div id='contact-card'>
             <h1 style={{marginTop: '100px'}}>Contact</h1>

                <p><img className='contact-icon' src={phonePic}></img>+32 488 49 87 14</p>
                <p>RevoSolutions BV, Rietstraat 7C, 8430 Middelkerke, Belgium </p>
                <p>anton@revosolutions.be</p>
                <p>LinkedIn</p>

            </div>



*/