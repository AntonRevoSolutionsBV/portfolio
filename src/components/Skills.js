
import './Skills.css';
import './AAGeneral.css';
import jsicon from '../media/js.png';
import html from '../media/html.png'
import typescript from '../media/typescript.png'
import react from '../media/react.png'
import pythonIco from '../media/python.png'
import nextIco from '../media/next.webp'
import nodeIco from '../media/node-js.png'
import expressIco from '../media/express.svg'
import firebaseIco from '../media/firebase.svg'
import cssIco from '../media/css.png'
import tailwindIco from '../media/tailwind.svg'
import figmaIco from '../media/figma.png'

function Skills() {
    return (
       <main id='main-skills'>
            <h2 className='main-h2'>
                <span className='white'>Skills</span> 
                <span className='orange'>&</span> 
                <span className='black'>Abilities</span>
            </h2>
            <div className='skills-container'>
                
                <div className='skill-container'>
                    <img className='skill-logo' src={jsicon}></img>
                    <p className='skill-name'>JavaScript</p>
              
                </div>

                <div className='skill-container'>
                    <img className='skill-logo' src={html}></img>
                    <p className='skill-name'>HTML5</p>
                </div>

                <div className='skill-container'>
                    <img className='skill-logo' src={cssIco}></img>
                    <p className='skill-name'>CSS</p>
                </div>

                <div className='skill-container'>
                    <img className='skill-logo' src={tailwindIco}></img>
                    <p className='skill-name'>TailwindCSS</p>
                </div>

                  <div className='skill-container'>
                    <img className='skill-logo' src={typescript}></img>
                    <p className='skill-name'>TypeScript</p>
                </div>

                 <div className='skill-container'>
                    <img className='skill-logo' src={react}></img>
                    <p className='skill-name'>React</p>
                </div>

                 <div className='skill-container'>
                    <img className='skill-logo' src={pythonIco}></img>
                    <p className='skill-name'>Python</p>
                </div>

                 <div className='skill-container'>
                    <img className='skill-logo' src={nextIco}></img>
                    <p className='skill-name'>NextJS</p>
                </div>

                <div className='skill-container'>
                    <img className='skill-logo' src={nodeIco}></img>
                    <p className='skill-name'>NodeJS</p>
                </div>

                <div className='skill-container'>
                    <img className='skill-logo' src={expressIco}></img>
                    <p className='skill-name'>ExpressJS</p>
                </div>

                <div className='skill-container'>
                    <img className='skill-logo' src={firebaseIco}></img>
                    <p className='skill-name'>Firebase</p>
                </div>

                <div className='skill-container'>
                    <img className='skill-logo' src={figmaIco}></img>
                    <p className='skill-name'>Figma</p>
                </div>



            </div>
        
        </main>

    )


}

export default Skills