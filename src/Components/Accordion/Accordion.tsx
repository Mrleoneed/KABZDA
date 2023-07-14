import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}


function Accordion(props: AccordionPropsType) {
    console.log('Accordion Rendered')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle Rendered')
    return (
        <>
            <h3 onClick={props.onChange}>{props.title}</h3>
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