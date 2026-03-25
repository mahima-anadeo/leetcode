function isValidParenthesis(str){
    const pair = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = [];
    for( let char of str){
       
        if(pair[char]){
            stack.push(char)
        }else{
            let top = stack.pop();
            if(char != pair[top]){
             return false
            }
        }
    }
    
    return   stack.length === 0;
}

console.log(isValidParenthesis('(){}[])'))