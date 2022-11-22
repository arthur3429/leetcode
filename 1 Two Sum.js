// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    let output = []
    
    for(let i = 0; i <= nums.length; i++) {
        for(let k = 0; k <= i; k++) {
            if(nums[i] + nums[k] === target && i != k) {
                output.push(k, i)
                return output
            }
        }
    }
}