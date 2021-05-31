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
module.exports={findMissingNumber};
// let arr=[10,11,12,13,14,16,17,18,19,20];
// console.log(findMissingNumber(arr));

// arr=[9,11,12,13,14,15,16,17,18,19,20];
// console.log(findMissingNumber(arr));

// arr=[null,12,13,14,15,16,17,18,19,20];
// console.log(findMissingNumber(arr));