import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";


function App() {
    console.log('App Rendered')
    return (
        <div>
            <Accordion titleValue={"Меню"} collapsed={true}/>
            <Accordion titleValue={"Пользователи"} collapsed={false}/>
            <Rating value={5}/>
        </div>
    );
}


export default App;
