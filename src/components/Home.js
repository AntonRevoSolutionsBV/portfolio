import './Home.css'
import React from 'react';
import { GlobalContext } from "../App.js"

export default function Home(props) {

    const value = React.useContext(GlobalContext)
    console.log(`home:${value.page}`)
    
    const [state, setState] = React.useState('visible')

    function toggleVisibility() {
        setState(false ? 'visible' : 'hidden')
    }


    let classList = value.page

    
    
    
    console.log(classList)


    return (
        <>
        <div id='home-page' className={classList}>
        {props.children}
        </div>
        </>    
    )


}