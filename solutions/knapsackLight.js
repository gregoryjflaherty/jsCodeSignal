// You found two items in a treasure chest! 
// The first item weighs weight1 and is worth 
// value1, and the second item weighs weight2 
// and is worth value2.

// What is the total maximum value of the 
// items you can take with you, assuming 
// that your max weight capacity is maxW 
// and you can't come back for the items 
// later?

// Note that there are only two items and you 
// can't bring more than one item of each 
// type, i.e. you can't take two first items 
// or two second items.


//psuedocode
// make map object with value and wieght 
// filter through eliminate all items more than max
// if combined values are under/equal to max then return that 
// else return max 



class Challenge {
    constructor(){
    }

    solution(value1, weight1, value2, weight2, maxW){
        let objectMap = {}
        objectMap[weight1] = value1
        objectMap[weight2] = value2
        let filtered = [weight1, weight2].filter((value) => value <= maxW)
        if(filtered.length === 2 & (weight1 + weight2 <= maxW)){
            return value1 + value2
        } else if (filtered.length === 2){
            let highestValue = Math.max(...[objectMap[filtered[0]], objectMap[filtered[1]]])
            return highestValue
        } else if (filtered.length === 1){
            return objectMap[filtered[0]]
        } else {
            return 0
        }
    }
}

module.exports = Challenge; 