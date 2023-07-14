import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import UnControlledAccordion from "./Components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/UnControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./Components/UnControlledOnOff/UnControlledOnOff";


function App() {
    console.log('App Rendered')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [acordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <div className={'App'}>

            <OnOff on={switchOn} onChange={(on) => setSwitchOn(on)}/>

            <Accordion titleValue={'Ha-Ha'} collapsed={acordionCollapsed}
                       onChange={() => setAccordionCollapsed(!acordionCollapsed)}/>
            <UnControlledAccordion titleValue={"Меню"}/>
            <UnControlledRating/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}


export default App;
