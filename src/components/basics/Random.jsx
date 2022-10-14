import React from "react";
import { useEffect, useState } from "react";




export default function Random (props) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    function handleMinChange(e) {
        setMin(e.target.value)
    }

    function handleMaxChange(e) {
        setMax(e.target.value)
    } 

    function generateRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return(
    <div>
        <label for='min'>Minimun:</label>
        <input type="text" id="min" name='min' onChange={handleMinChange}/>
        <br/>
        <label for='max'>Maximum:</label>
        <input type='text' id='max' name='max' onChange={handleMaxChange}/>
        <br/>
        <text>The number generated was between {min} and {max} : {generateRandom(min, max)}</text>
    </div>
    )

}