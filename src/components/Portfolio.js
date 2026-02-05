import './Portfolio.css'
import cv from '../media/CV.png'
import cabs from '../media/cabs.jpg'
import travel from '../media/travel.png'
import site from '../media/This.png'
import invoiceGen from  '../media/invoicegenerator.png'
import amazon from  '../media/amazon.png'
import webstore from  '../media/webstore.png'
import travelblog from  '../media/travelblog.png'
import endgame from  '../media/endgame.png'
import youtube from  '../media/youtube.png'
import printforge from '../media/printforge.png'

function Portfolio() {
    return (
     <div id='portfolio-main'>
        <h2 id='portfolio-title'>Portfolio</h2>
        <p class='portfolio-note'>Note: 
            
            <br />This page is still work in progress, so there are plenty of issues to be fixed.
            <br />If you have any questions, don't hesitate to ask!</p>
        
        
        
        <div class='portfolio-entry'>
        <div class='portfolio-entry-right'>
            <h2>This website</h2>
            <p class='portfolio-p'>React | HTML | CSS | JavaScript | Responsive Design | Mobile </p>
            
        </div>
        <div class='portfolio-entry-bottom'>
            <div class='img-container'>
            <img class='portfolio-img' src={site}></img>
            </div>
            <div class='portfolio-entry-text'>
            <p>I designed this portfolio website using React to showcase some of my abilities I have acquired over the years working in my own start-up. I decided to go with React, because it facilitates the reusability of the custom components, which is very useful for a page that is supposed to be updated on a regular basis.  
                </p>
            <p>
                Feel free to view this website on a smartphone screen. 
            </p>

                <p>
            This webpage is hosted on a server that was built in collaboration with Asheera Dolinsky, co-founder of Revosolutions BV.</p>
            </div>
        </div>
        </div>

        <div class='portfolio-entry'>
        <div class='portfolio-entry-right'>
            <h2>Curriculum Vitae</h2>
            <p class='portfolio-p'>HTML | CSS </p>
            
        </div>
        <div class='portfolio-entry-bottom'>
            <div class='img-container'>
            <img class='portfolio-img' src={cv}></img>
            </div>
            <div class='portfolio-entry-text'>
            <p>TThis is a simple Curriculum Vitae webpage that was designed with basic HTLM and CSS. It uses common techniques like flexbox, text editing, using special characters etc. It can be printed out directly as a single A4 page.
            </p> <p>  Creating layouts and styles in HTML and CSS has become a second nature for me at this point, so I use it often to create printed documents.</p>
            </div>
        </div>
        </div>

        <div class='portfolio-entry'>
        <div class='portfolio-entry-right'>
            <h2>Invoice Generator</h2>
            <p class='portfolio-p'>HTML | CSS | JavaScript </p>
            
        </div>
        <div class='portfolio-entry-bottom'>
            <div class='img-container'>
            <img class='portfolio-img' src={invoiceGen}></img>
            </div>
            <div class='portfolio-entry-text'>
            <p>This is a custom application that takes customer data and items either as a direct input or from a data storage, then prints a complete invoice in a pdf-pritable standard A4 format. It was designed to be used as a standalone application, as well as being a seperate module for a webstore.
            </p> <p> It has several smart features that are coded with JavaScript. For example, the default date will be set to the actual current date. The application will check for a VAT-number and apply VAT-reverse-charge when needed. The application knows if a certain article is already on the list, and will not add an extra line if you want to add more of it to the invoice, it will just increase the quantity.</p>
            </div>
        </div>
        </div>


        <div class='portfolio-entry'>
        <div class='portfolio-entry-right'>
            <h2>YouTube clone project</h2>
            <p class='portfolio-p'>HTML | CSS | Responsive Design  </p>
            
        </div>
        <div class='portfolio-entry-bottom'>
            <div class='img-container'>
            <img class='portfolio-img' src={youtube}></img>
            </div>
            <div class='portfolio-entry-text'>
            <p>This small project was done to practice my HTML and CSS skills. The idea was to replicate the layout of a well known site. It features Responsive Design, flexbox, grid, among other techniques which were coded using HTML and CSS. 
            I have no problem recreating any Figma designs in HTML and CSS with pixel perfect accuracy.
            
            
            </p> <p>  </p>
            </div>
        </div>
        </div>

           <div class='portfolio-entry'>
        <div class='portfolio-entry-right'>
            <h2>Amazon.com clone project</h2>
            <p class='portfolio-p'>HTML | CSS | JavaScript | Responsive Design  </p>
            
        </div>
        <div class='portfolio-entry-bottom'>
            <div class='img-container'>
            <img class='portfolio-img' src={amazon}></img>
            </div>
            <div class='portfolio-entry-text'>
            <p>
                The goals was the same as with the YouTube clone project: to replicate an industry standard design with HTML and CSS. This time, however, I went a bit further and I also attempted to recreate some of the functionality of Amazon web store. The functionality includes generating product cards and other DOM manipulations from data that is being fetched from and API, adding items to a cart, calculating total price, etc.
            
            
            </p> <p>  </p>
            </div>
        </div>
        </div>

        <div class='portfolio-entry'>
        <div class='portfolio-entry-right'>
            <h2>Electronics DIY webstore prototype</h2>
            <p class='portfolio-p'>HTML | CSS | JavaScript | TypeScript | Responsive Design  </p>
            
        </div>
        <div class='portfolio-entry-bottom'>
            <div class='img-container'>
            <img class='portfolio-img' src={webstore}></img>
            </div>
            <div class='portfolio-entry-text'>
            <p>
                This is a basic webstore for DIY electronics. Functionality includes generating instance from a database located on the backend, filtering results and adding products to a shopping cart.
                This project is currently under construction, but it already shows some of the more complex JavaScript/TypeScript techniques.
                TypeScript was used because in this instance the code benefits a lot by using types.
            
            </p> <p>  </p>
            </div>
        </div>
        </div>


        <div class='portfolio-entry'>
        <div class='portfolio-entry-right'>
            <h2>Travel Blog</h2>
            <p class='portfolio-p'>React | JavaScript | HTML | CSS  </p>
            
        </div>
        <div class='portfolio-entry-bottom'>
            <div class='img-container'>
            <img class='portfolio-img' src={travelblog}></img>
            </div>
            <div class='portfolio-entry-text'>
            <p>
                A basic personalized blog, designed using React framework. It uses a dataset to dynamically generate different entries. As always, the styling was done using CSS, and the basic layout is done with HTML.
            
            </p> <p>  </p>
            </div>
        </div>
        </div>

        <div class='portfolio-entry'>
        <div class='portfolio-entry-right'>
            <h2>Travel Blog</h2>
            <p class='portfolio-p'>React | JavaScript | HTML | CSS  </p>
            
        </div>
        <div class='portfolio-entry-bottom'>
            <div class='img-container'>
            <img class='portfolio-img' src={endgame}></img>
            </div>
            <div class='portfolio-entry-text'>
            <p>
                A classic 'hangman' type of game, with twist. The goal is to guess the word before you run out of programming languages and left with only the Assembly.
            
                </p>The word is picked randomly from a dictionary, each time you guess a wrong letter, one programming language is removed. This small app combines styling using CSS with functionality provided by React logic. <p>  </p>
            </div>
        </div>
        </div>


        <div class='portfolio-entry'>
        <div class='portfolio-entry-right'>
            <h2>PrintForge</h2>
            <p class='portfolio-p'>NextJS | React | JavaScript | HTML | CSS  </p>
            
        </div>
        <div class='portfolio-entry-bottom'>
            <div class='img-container'>
            <img class='portfolio-img' src={printforge}></img>
            </div>
            <div class='portfolio-entry-text'>
            <p>
                This is a small web page made with NextJS framework. The framework comes into play mostly by facilitating routing and creating layouts that are shared between different pages.
            
                </p> <p>  </p>
            </div>
        </div>
        </div>









        
 



   



        

     </div>


)
        




}

export default Portfolio