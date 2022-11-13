
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