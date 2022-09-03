// You're given three integers, a, b and c. It is guaranteed 
// that two of these integers are equal to each other. What 
// is the value of the third integer?

// Example

// For a = 2, b = 7, and c = 2, the output should be
// solution(a, b, c) = 7.

// The two equal numbers are a and c.The third number(b) 
// equals 7, which is the answer.


// psuedocode 
// 2, 2, 7
// 7, 8, 8
// sort the array check if 0 == 1
    // true return 2
    // false return 0




class Challenge {
    constructor() {
    }

    solution(a, b, c) {
        let sorted = [a, b, c].sort((a, b) => a - b)
        return sorted[0] === sorted[1] ? sorted[2] : sorted[0]
    }
}

module.exports = Challenge; 