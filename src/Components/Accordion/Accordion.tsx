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
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
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