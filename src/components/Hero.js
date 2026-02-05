import './Hero.css'
import './AAGeneral.css'
import avatar from '../media/avatar.jpg'
import { NavLink } from 'react-router-dom'


function Hero() {
    return (
        <main id='hero-main'>
        <div id='hero-left'>
        <h2 class='hero-h2'>Hi There, <br />
            I'm Anton <span class='orange'>Dolinsky</span>
        </h2>
        <p class='hero-p'>Freelance <span class='orange'>Web Developer</span> & <br/>
            Founder of Revosolutions BV
        </p>

        <NavLink to='/about'>
                <button class='hero-button'>About Me</button>
            </NavLink>
        
        </div> 

        <div id='hero-right'>
            <img id='hero-avatar' src={avatar}></img>
        </div>
        
        
        </main>


    )


}

export default Hero;