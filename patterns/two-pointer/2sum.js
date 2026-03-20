/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right ){
        let sum = numbers[left] + numbers[right ];
        if(sum === target ){
            return [left+1,right+1];
        } else if (sum < target ){
            left++;
        } else{
            right--
        }
    }
};


console.log (twoSum([2,7,11,15],9))
console.log (twoSum([3,2,4],6))