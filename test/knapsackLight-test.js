let assert = require('chai').assert;
let Challenge = require('../solutions/knapsackLight')

describe('Challenge', function(){
    it('test1', function(){
        let value1 = 10
        let weight1 = 5
        let value2 = 6
        let weight2 = 4
        let maxW = 8

        let challenge = new Challenge;
        assert.equal(challenge.solution(value1, weight1, value2, weight2, maxW), 10)
    })

    it('test2', function(){
        let value1 = 10
        let weight1 = 5
        let value2 = 6
        let weight2 = 4
        let maxW = 9

        let challenge = new Challenge;
        assert.equal(challenge.solution(value1, weight1, value2, weight2, maxW), 16)
    })

    it('test3', function(){
        let value1 = 5
        let weight1 = 3
        let value2 = 7
        let weight2 = 4
        let maxW = 6

        let challenge = new Challenge;
        assert.equal(challenge.solution(value1, weight1, value2, weight2, maxW), 7)
    })

    it('test4', function(){
        let value1 = 10
        let weight1 = 2
        let value2 = 11
        let weight2 = 3
        let maxW = 1

        let challenge = new Challenge;
        assert.equal(challenge.solution(value1, weight1, value2, weight2, maxW), 0)
    })

    it('test5', function(){
        let value1 = 15
        let weight1 = 2
        let value2 = 20
        let weight2 = 3
        let maxW = 2

        let challenge = new Challenge;
        assert.equal(challenge.solution(value1, weight1, value2, weight2, maxW), 15)
    })

    it('test6', function(){
        let value1 = 2
        let weight1 = 5
        let value2 = 3
        let weight2 = 4
        let maxW = 5

        let challenge = new Challenge;
        assert.equal(challenge.solution(value1, weight1, value2, weight2, maxW), 3)
    })

    it('test7', function(){
        let value1 = 4
        let weight1 = 3
        let value2 = 3
        let weight2 = 4
        let maxW = 4

        let challenge = new Challenge;
        assert.equal(challenge.solution(value1, weight1, value2, weight2, maxW), 4)
    })

    it('test8', function(){
        let value1 = 3
        let weight1 = 5
        let value2 = 3
        let weight2 = 8
        let maxW = 10

        let challenge = new Challenge;
        assert.equal(challenge.solution(value1, weight1, value2, weight2, maxW), 3)
    })
})