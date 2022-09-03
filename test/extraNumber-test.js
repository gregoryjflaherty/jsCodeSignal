let assert = require('chai').assert;
let Challenge = require('../solutions/extraNumber')

describe('Challenge', function () {
    it('test1', function () {
        let a = 2
        let b = 7
        let c = 2


        let challenge = new Challenge;
        assert.equal(challenge.solution(a, b, c), 7)
    })

    it('test2', function () {
        let a = 3
        let b = 2
        let c = 2


        let challenge = new Challenge;
        assert.equal(challenge.solution(a, b, c), 3)
    })

    it('test3', function () {
        let a = 5
        let b = 5
        let c = 1


        let challenge = new Challenge;
        assert.equal(challenge.solution(a, b, c), 1)
    })

    it('test4', function () {
        let a = 500000000
        let b = 3
        let c = 500000000


        let challenge = new Challenge;
        assert.equal(challenge.solution(a, b, c), 3)
    })

    it('test5', function () {
        let a = 1
        let b = 5
        let c = 1


        let challenge = new Challenge;
        assert.equal(challenge.solution(a, b, c), 5)
    })

    it('test6', function () {
        let a = 5
        let b = 5
        let c = 3


        let challenge = new Challenge;
        assert.equal(challenge.solution(a, b, c), 3)
    })

    it('test7', function () {
        let a = 5
        let b = 1
        let c = 1


        let challenge = new Challenge;
        assert.equal(challenge.solution(a, b, c), 5)
    })

    it('test8', function () {
        let a = 4000000
        let b = 3000000
        let c = 4000000


        let challenge = new Challenge;
        assert.equal(challenge.solution(a, b, c), 3000000)
    })

    it('test9', function () {
        let a = 548442737
        let b = 82231042
        let c = 548442737


        let challenge = new Challenge;
        assert.equal(challenge.solution(a, b, c), 82231042)
    })

    it('test10', function () {
        let a = 469992838
        let b = 66019520
        let c = 66019520


        let challenge = new Challenge;
        assert.equal(challenge.solution(a, b, c), 469992838)
    })
})