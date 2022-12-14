// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps = function(num) {
    let steps = 0
    while (num > 0) {
        if(num % 2 == 0) {
            num = num / 2
            steps++
        } else {
            num = num - 1
            steps++
        }
    }
    return steps
};