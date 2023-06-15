import React from 'react';
import './App.css';


function App() {
    console.log('App Rendered')
    return (
        <div>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    console.log('Rating Rendered')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Accordion() {
    console.log('Accordion Rendered')
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}

function Star() {
    console.log('Star Rendered')
    return (
        <div>Star </div>
    )
}

function AccordionTitle() {
    console.log('AccordionTitle Rendered')
    return (
        <>
            <h3>Меню</h3>
        </>
    )
}

function AccordionBody() {
    console.log('AccordionBody Rendered')
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}


export default App;
