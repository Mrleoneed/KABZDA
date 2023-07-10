import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import UnControlledAccordion from "./Components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/UnControlledRating/Rating";


function App() {
    console.log('App Rendered')
    return (
        <div className={'App'}>

            <OnOff/>
            <OnOff/>
<Accordion titleValue={'Ha-Ha'} collapsed={false}/>
            <UnControlledAccordion titleValue={"Меню"} />
            <UnControlledRating/>
            <Rating value={2}/>
        </div>
    );
}


export default App;
