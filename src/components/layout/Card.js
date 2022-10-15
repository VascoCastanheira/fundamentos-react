import React from "react";
import Card from "./Card.css"

export default props => {
    return (
        <div className='Card'>
            <div className='Title'>{props.Title}</div>
            <div className='Content'>{props.children}</div>
        </div>)
}