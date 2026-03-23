function maxconsecutiveones(arr){
   let count = 0;
   let max = 0;
   for(let i=0;i<arr.length;i++){
    if(arr[i]==1){
        count= count+1;
       
        max = Math.max(max, count)
    }else{
        count = 0;
    }
   }
   return max;
}

console.log(maxconsecutiveones([1,1,0,1,1,1,1,0,0,1,1,1,1,1,1]))