import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
}


function UnControlledAccordion(props: AccordionPropsType) {
let [collapsed,setCollapsed]= useState(true)


    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>setCollapsed(!collapsed)}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {

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

export default UnControlledAccordion