function isPalindrome(data){
    const str = data.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let left = 0;
    let right = str.length-1;
    while(left < right){
        if(str.charAt(left)!= str.charAt(right)){
            return false;

        }else{
            left++;
            right--;
        }
    } 
    return true;

}

console.log(isPalindrome('malayalam'))