import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import UnControlledAccordion from "./Components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./Components/UnControlledRating/UnControlledRating";


function App() {
    console.log('App Rendered')
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accrodionCollapsed, setAccordionCollapsed]=useState<boolean>(false)
    return (
        <div className={'App'}>

            <OnOff/>
            <OnOff/>
            <Accordion titleValue={'Ha-Ha'} collapsed={accrodionCollapsed}/>
            <UnControlledAccordion titleValue={"Меню"}/>
            <UnControlledRating/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
        </div>
    );
}


export default App;
