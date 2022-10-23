import React from "react";
import Buttons from "./Buttons";
import Formdata from "./Formdata";
import EuroMillions from "./EuroMillions.css"



export default props => {
    const numbers = (newNumbers) =>{
        this.setState({
            numbers: newNumbers
        });
    }
    
    return ( 
        <div className='EuroMillions'>
            <h1><strong>Your random generated numbers to play in the lottery are </strong></h1>
            <Formdata numbers={this.state.numbers}/>
            <Buttons/>
        </div>
    )
}