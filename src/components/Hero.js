import './Hero.css'
import './AAGeneral.css'
import avatar from '../media/avatar.jpg'


function Hero() {
    return (
        <main id='hero-main'>
        <div id='hero-left'>
        <h2 class='hero-h2'>Hi There, <br />
            I'm Anton <span class='orange'>Dolinsky</span>
        </h2>
        <p>Freelance <span class='orange'>Web Developer</span> & <br/>
            Founder of Revosolutions BV
        </p>
        <button class='hero-button'>About Me</button>
        </div> 

        <div id='hero-right'>
            <img id='hero-avatar' src={avatar}></img>
        </div>
        
        
        </main>


    )


}

export default Hero;