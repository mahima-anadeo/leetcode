// program to sum first 100 natural numbers 
// 1-100 
// generate range(1,100,1), sum +=sum+range(i)
// 
const sumNatural = ()=>{

    let sum = 0;

    // brute force 
    // optimise 
    // functional programming // arithmatic progression 
    for(let i=1;i<=100;i++){
         sum += i;
    }
    return sum ;

}

const sumNatural2 = (n = 100)=>{

    let sum = n * (n+1)/2
    return sum;

}


console.log(sumNatural())
console.log(sumNatural2(100))
// 5050

