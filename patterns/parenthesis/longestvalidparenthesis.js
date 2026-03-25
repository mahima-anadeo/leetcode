
// 2 scan approach 
function longestValidParentheses2(s) {
    let maxLen = 0;
    let left = 0, right = 0;
  
    // Left → Right scan
    for (let ch of s) {
      if (ch === '(') {
        left++;
      } else {
        right++;
      }
      if (left === right) {
        maxLen = Math.max(maxLen, 2 * right);
      } else if (right > left) {
        left = right = 0;
      }
    }
  
    left = right = 0;
  
    // Right → Left scan
    for (let i = s.length - 1; i >= 0; i--) {
      let ch = s[i];
      if (ch === '(') {
        left++;
      } else {
        right++;
      }
      if (left === right) {
        maxLen = Math.max(maxLen, 2 * left);
      } else if (left > right) {
        left = right = 0;
      }
    }
  
    return maxLen;
  }

  console.log(longestValidParentheses2("(()"))
  console.log(longestValidParentheses2(")()())"))
  