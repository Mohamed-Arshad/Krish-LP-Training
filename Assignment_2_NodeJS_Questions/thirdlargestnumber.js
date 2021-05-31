// Q1) Find third largest number from given array?
const find3rdLargestNum=(originalarray)=>{
    let arr=[...originalarray];
    for(let i=0;i<3;i++){               //run only 3 times to get 3rd largest value
                                        //selection sort
        let max=0;
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[max]){
                max=j
            }
        }
        let temp=arr[arr.length-1-i];
        arr[arr.length-1-i]=arr[max];
        arr[max]=temp;
    }
    return arr[arr.length-3];
}
module.exports={find3rdLargestNum};
//  let arr=[77,54,67,89,80,20,100,200,500,10,40,800,1000,-5,1,0,-1];
//  console.log(find3rdLargestNum(arr));