import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}


function Accordion(props: AccordionPropsType) {
    console.log('Accordion Rendered')
    if (props.collapsed === true) {
        return <AccordionTitle title={props.titleValue}/>
    } else
        return (
            <>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </>
        )
}


function AccordionTitle(props: AccordionTitlePropsType) {
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