/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a,b)=> a-b);
  let closestSum = Infinity ;
  for(let i=0;i<nums.length-2;i++){
    if(i > 0 && nums[i]===nums[i-1]) continue;
    let low = i+1;
    let high = nums.length-1;
    while(low < high){
        let sum = nums[i]+nums[low]+nums[high];
       // 2. If we find the exact target, return immediately
            if (sum === target) return sum;

            // 3. Logic Fix: Compare the DIFFERENCE to the target
            // If the current difference is smaller than the best difference found so far
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
      
        else if(sum < target){
            low++;
        }else{
            high--;
        }
    }
  }
  return closestSum;
};

console.log(threeSumClosest([-1,2,1,-4],1))
console.log(threeSumClosest([0,0,0],1))


// https://leetcode.com/problems/3sum-closest/
