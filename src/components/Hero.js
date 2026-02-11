import './Hero.css'
import './AAGeneral.css'
import avatar from '../media/avatar.jpg'
import { NavLink } from 'react-router-dom'


function Hero() {
    return (
        <main id='hero-main'>
        <div id='hero-left'>
        <h2 className='hero-h2'>Hi There- <br />
            I'm Anton <span className='orange'>Dolinsky</span>
        </h2>
        <p className='hero-p'>Freelance <span className='orange'>Web Developer</span> & <br/>
            Founder of Revosolutions BV
        </p>

        <NavLink to='/about'>
                <button className='hero-button'>About Me</button>
            </NavLink>
        
        </div> 

        <div id='hero-right'>
            <img id='hero-avatar' src={avatar}></img>
        </div>
        
        
        </main>


    )


}

export default Hero;