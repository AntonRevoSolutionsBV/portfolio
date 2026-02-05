
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
            <h2 class='main-h2'>
                <span class='white'>Skills</span> 
                <span class='orange'>&</span> 
                <span class='black'>Abilities</span>
            </h2>
            <div class='skills-container'>
                
                <div class='skill-container'>
                    <img class='skill-logo' src={jsicon}></img>
                    <p class='skill-name'>JavaScript</p>
              
                </div>

                <div class='skill-container'>
                    <img class='skill-logo' src={html}></img>
                    <p class='skill-name'>HTML5</p>
                </div>

                <div class='skill-container'>
                    <img class='skill-logo' src={cssIco}></img>
                    <p class='skill-name'>CSS</p>
                </div>

                <div class='skill-container'>
                    <img class='skill-logo' src={tailwindIco}></img>
                    <p class='skill-name'>TailwindCSS</p>
                </div>

                  <div class='skill-container'>
                    <img class='skill-logo' src={typescript}></img>
                    <p class='skill-name'>TypeScript</p>
                </div>

                 <div class='skill-container'>
                    <img class='skill-logo' src={react}></img>
                    <p class='skill-name'>React</p>
                </div>

                 <div class='skill-container'>
                    <img class='skill-logo' src={pythonIco}></img>
                    <p class='skill-name'>Python</p>
                </div>

                 <div class='skill-container'>
                    <img class='skill-logo' src={nextIco}></img>
                    <p class='skill-name'>NextJS</p>
                </div>

                <div class='skill-container'>
                    <img class='skill-logo' src={nodeIco}></img>
                    <p class='skill-name'>NodeJS</p>
                </div>

                <div class='skill-container'>
                    <img class='skill-logo' src={expressIco}></img>
                    <p class='skill-name'>ExpressJS</p>
                </div>

                <div class='skill-container'>
                    <img class='skill-logo' src={firebaseIco}></img>
                    <p class='skill-name'>Firebase</p>
                </div>

                <div class='skill-container'>
                    <img class='skill-logo' src={figmaIco}></img>
                    <p class='skill-name'>Figma</p>
                </div>



            </div>
        
        </main>

    )


}

export default Skills