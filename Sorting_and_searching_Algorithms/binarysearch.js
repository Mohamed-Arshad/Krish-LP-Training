//binary search
const binarySearch=(sortedarray,key)=>{
    let start=0;
    let end=sortedarray.length-1;

    while(start<=end){
        let middle=Math.floor((start + end) / 2);
        if(sortedarray[middle]===key){
            return middle;
        }else if(sortedarray[middle]>key){
            end=middle-1;
        }else{
            start=middle+1;
        }
    }
    return null;
}
module.exports={binarySearch};

// let brr=[1,2,3,4,5,6,7,8,9,10];
// console.log(binarySearch(brr,7));