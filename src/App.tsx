import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import UnControlledAccordion from "./Components/UnControlledAccordion/UnControlledAccordion";


function App() {
    console.log('App Rendered')
    return (
        <div>

            <OnOff/>
            <OnOff/>

            <UnControlledAccordion titleValue={"Меню"}/>
            <UnControlledAccordion titleValue={"Меню"} />

            <Rating value={5}/>
        </div>
    );
}


export default App;
