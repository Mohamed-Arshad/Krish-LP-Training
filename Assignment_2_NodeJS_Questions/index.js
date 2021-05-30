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
//  let arr=[77,54,67,89,80,20,100,200,500,10,40,800,1000,-5,1,0,-1];
//  console.log(find3rdLargestNum(arr));



//Q2) count the repetion number from the given sentence?
const repetetioncount=(str)=>{
    str=str.toLowerCase();
    let map=new Map();
    for(let i=0;i<str.length;i++){
        if(map.has(str.charAt(i))){
            map.set(str.charAt(i),map.get(str.charAt(i))+1);
        }else{
            map.set(str.charAt(i),1);
        }
    }
    return [...map]
}
//console.log(repetetioncount("Arshad Suraj"));


//Q3) find the missing number from the given sequence?
const findMissingNumber = (arr) => {
    if (arr[1] == arr[0] + 1) {  //ckecks whether 1st 2 elements are in correct sequence
        let i = 1; //array index
        for (; i < arr.length; i++) {
            if (arr[i + 1] != arr[i] + 1) {
                return arr[i] + 1;
            }
        }
    } else if (arr[2] == arr[1] + 1) { //true: if 1st element is missing
        return arr[1] - 1;             //return 1st element
    } else {                           //executes if 2nd element is missing 
        return arr[0] + 1;             //return 2 nd element
    }
}
// let arr=[10,11,12,13,14,16,17,18,19,20];
// console.log(findMissingNumber(arr));

// arr=[9,11,12,13,14,15,16,17,18,19,20];
// console.log(findMissingNumber(arr));

// arr=[null,12,13,14,15,16,17,18,19,20];
// console.log(findMissingNumber(arr));




//Q4) find whether 2 words are anagram?
const isAnagram=(str1,str2)=>{
    if(str1.split("").sort().join("").toLowerCase()==str2.split("").sort().join("").toLowerCase()){
        return true;              //true: if str1 & str2 are angram 
    }
    return false;                 //false: if both are ot anagram
}
// console.log(isAnagram("listen","silent"));
// console.log(isAnagram("Hi","bye"));