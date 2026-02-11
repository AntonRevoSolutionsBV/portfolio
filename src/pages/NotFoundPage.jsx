import React from "react";
import error404 from "../media/error404.png"
import { Link } from "react-router-dom"
import './NotFoundPage.css'

export default function NotFoundPage() {
    const styleHeader = {
        
    }

    const styleImg = {
        width: "200px",


    }
   
    const styleDiv = {
        gap: '20px',
        justifyContent: 'center',
        marginTop: '200px',
        display: 'flex',
        alignItems: 'center',
        }

    const styleLink = {
        
        fontSize: '1.4rem',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    }
   
   
   
    return (
        <>
        <div className='not-found-container' style={styleDiv}>
        <img style={styleImg} src={error404}/>
        <div>
        <h1 style={styleHeader}>Error 404: Page not found... &#128557;</h1>
        <Link style={styleLink} to='/home' >&#128073; Back to Homepage</Link>
        </div>
        </div>
        </>
    


)


}