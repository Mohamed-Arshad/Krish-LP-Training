//let arr=[10,100,50,-5,89,23,-4,0,55,89,32,44,44,25];

//bubble sort
const bubble_sort=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

module.exports = {bubble_sort};

//console.log(bubble_sort(arr));