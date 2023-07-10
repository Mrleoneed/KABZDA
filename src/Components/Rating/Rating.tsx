import React from "react";

type RatingPropsType = {
    value: number
}

type StarPropsType = {
    selected: boolean;
}


export function Rating(props: RatingPropsType) {
    console.log('Rating Rendered')
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    return (
        <span>
          {props.selected ?<b>Star</b> : 'Star'}
    </span>

    )

}