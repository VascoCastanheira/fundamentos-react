import React, {useState} from "react";
import Buttons from "./Buttons";
import Formdata from "./Formdata";
import EuroMillions from "./EuroMillions.css"
import GenerateNumbers from "./GenerateNumbers"



export default props => {


    function generateRandomNumberNotContained (min, max, array) {
        const random = parseInt(Math.random() * (max - min)) + min
        return array.includes(random) ?
        generateRandomNumberNotContained(min, max, array) :
            random
        //return  Array.from({length: amountNumbers}, () => Math.floor(Math.random() * 60));
    }
    
    function generateNumbers (quantity){
        const numbers = Array(quantity)
            .fill(0)
            .reduce((nums) =>{
                const newNumber = generateRandomNumberNotContained(1, 60 , nums)
                return [ ...nums, newNumber]
            }, [])
            .sort((n1, n2) => n1 - n2)
    
        return numbers
        }
    
    const [amount, setAmount]=  useState(props.quantity || 6)
    const initialNumbers = Array(amount).fill(0)
    const [numbers, setNumbers] = useState(initialNumbers)

    return (
        <div className="EuroMillions">
            <h2>EuroMillions</h2>
            <h3>{numbers.join(' ')}</h3>
            <div>
                <label>Quantity of Numbers</label>
                <input type="number" value={amount} onChange={e => {
                    setNumbers(generateNumbers(amount))
                    setAmount(+e.target.value)
                    }
                }></input>
            </div>
            <button onClick={_ => setNumbers(generateNumbers(amount))}>Generate Numbers</button>
        </div>
    )
}