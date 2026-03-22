

var moveZeroes = function(nums) {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] !== 0) {
            // Swap elements at left and right
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            // Move the left pointer to the next spot
            left++;
        }
        // Always move the right pointer to keep scouting
        right++;
    }
};

console.log(moveZeroes([0,1,0,3,12]))

//https://leetcode.com/problems/move-zeroes/