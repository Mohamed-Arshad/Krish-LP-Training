//Linear Search
const linearSearch=(arr,key)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            return i;
        }
    }
    return null;
}

//Global Linear Search
const globalLinearSearch=(arr,key)=>{
    let output=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            output.push(i);
        }
    }
    if(output.length){
        return output;
    }
    return null;
}

module.exports={linearSearch,globalLinearSearch};

//let arr=[5,6,2,10,23,65,40,12,35,100,5,98,5];
//console.log(linearSearch(arr,100));
//console.log(globalLinearSearch(arr,5));
