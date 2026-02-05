import './Education.css'
import ehb from '../media/ehb.png'
import vub from '../media/vub.svg'

function Education() {
    return ( 
    
    <div id='education-main'>
        
        <div id='education-left'>
            <div id='education-left-text'>
                <h2 class='education-title'>Bachelor in AudioVisual Communications</h2>
                <p class='education-year'>Graduated 2012</p>
            </div>
            <img class='university-logo' src={ehb}></img>

        </div>
        <div id='education-right'>
            <img class='university-logo' src={vub}></img>
            <div id='education-right-text'>
                <h2 class='education-title'>Bachelor in Applied Economic Sciences</h2>
                <p class='education-year'>Graduated 2016</p>
            </div>
            
            </div>
    </div>

)
    
   
}

export default Education;