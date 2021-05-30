//let arr=[10,100,50,-5,89,23,-4,0,55,89,32,44,44,25];

//selection sort
const selection_sort=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        let min = i; //index of the minimum value
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i != min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
module.exports = {selection_sort};

//console.log(selection_sort(arr));