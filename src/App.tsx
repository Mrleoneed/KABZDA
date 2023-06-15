import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Rating/Rating";


function App() {
    console.log('App Rendered')
    return (
        <div>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Меню"}/>
            <Accordion titleValue={"Пользователи"}/>
            Article 1
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


export default App;
