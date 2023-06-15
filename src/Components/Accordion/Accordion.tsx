import React from "react";


type AccordionPropsType = {
    title: string
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion Rendered')
    return (
        <>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </>
    )
}

function AccordionTitle(props: AccordionPropsType) {
    console.log('AccordionTitle Rendered')
    return (
        <>
            <h3>{props.title}</h3>
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

export default Accordion