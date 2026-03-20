/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // STEP 1: Sort. This is the enabling move.
    // It lets us use two pointers AND skip duplicates.
    nums.sort((a, b) => a - b);
    
    const result = [];
    
    // STEP 2: Fix one element, solve 2-Sum on the rest.
    for (let i = 0; i < nums.length - 2; i++) {
        
        // OPTIMIZATION: If nums[i] > 0, no three positive numbers sum to 0.
        // Since array is sorted, everything after i is also positive.
        if (nums[i] > 0) break;
        
        // DUPLICATE SKIP for i: If this value is same as previous,
        // we already explored all triplets starting with this value.
        // WHY i > 0? Because i = 0 has no previous to compare with.
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        // STEP 3: Two-pointer 2-Sum on subarray [i+1, n-1]
        // Target for 2-Sum = -nums[i] (because a + b + c = 0 → b + c = -a)
        let lo = i + 1;
        let hi = nums.length - 1;
        
        while (lo < hi) {
            const sum = nums[i] + nums[lo] + nums[hi];
            
            if (sum === 0) {
                result.push([nums[i], nums[lo], nums[hi]]);
                
                // DUPLICATE SKIP for lo and hi:
                // Move past all identical values to avoid duplicate triplets.
                // WHY while loops? Because there could be multiple duplicates.
                while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
                while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
                
                // Move both pointers inward after skipping duplicates
                lo++;
                hi--;
                
            } else if (sum < 0) {
                lo++;   // need bigger sum
            } else {
                hi--;   // need smaller sum
            }
        }
    }
    
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))