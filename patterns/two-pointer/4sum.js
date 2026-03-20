/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function sum4(nums, target){
  // STEP 1: Sort. This is the enabling move.
    // It lets us use two pointers AND skip duplicates.
    nums.sort((a, b) => a - b);
    
    const result = [];
      for (let i = 0; i < nums.length - 3; i++) {
         
         // DUPLICATE SKIP for i: If this value is same as previous,
        // we already explored all triplets starting with this value.
        // WHY i > 0? Because i = 0 has no previous to compare with.
        if (i > 0 && nums[i] === nums[i - 1]) continue;
    // STEP 2: Fix one element, solve 2-Sum on the rest.
      for (let j = i+1; j < nums.length - 2; j++) {
        
        
         // DUPLICATE SKIP for i: If this value is same as previous,
        // we already explored all triplets starting with this value.
        // WHY i > 0? Because i = 0 has no previous to compare with.
        if (j > i+1 && nums[j] === nums[j - 1]) continue;
        
       
        
        // STEP 3: Two-pointer 2-Sum on subarray [i+1, n-1]
        // Target for 2-Sum = -nums[i] (because a + b + c = 0 → b + c = -a)
        let lo = j + 1;
        let hi = nums.length - 1;
        
        while (lo < hi) {
            const sum = nums[i] + nums[j] + nums[lo] + nums[hi];
            
            if (sum === target) {
                result.push([nums[i],nums[j], nums[lo], nums[hi]]);
                
                // DUPLICATE SKIP for lo and hi:
                // Move past all identical values to avoid duplicate triplets.
                // WHY while loops? Because there could be multiple duplicates.
                while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
                while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
                
                // Move both pointers inward after skipping duplicates
                lo++;
                hi--;
                
            } else if (sum < target) {
                lo++;   // need bigger sum
            } else {
                hi--;   // need smaller sum
            }
        }
    }
      }
    
    return result;
}


console.log(fourSum([1,0,-1,0,-2,2],0))
console.log(fourSum([2,2,2,2,2]),8)