//let arr=[10,100,50,-5,89,23,-4,0,55,89,32,44,44,25];

//quicksort
const quick_sort=(arr, mostleft, mostright)=>{
    if (mostleft < mostright) {
        let p = partition(arr, mostleft, mostright);
        quick_sort(arr, mostleft, p - 1);
        quick_sort(arr, p + 1, mostright);
    }
}

const partition=(arr, mostleft, mostright)=>{
    let pivot = arr[mostright];
    let pointer = mostleft;

    for (let i = mostleft; i < mostright; i++) {
        if (pivot > arr[i]) {
            let temp = arr[pointer];
            arr[pointer] = arr[i];
            arr[i] = temp;
            pointer++;
        }
    }
    let temp = arr[pointer];
    arr[pointer] = arr[mostright];
    arr[mostright] = temp;

    return pointer;
}
module.exports={quick_sort};

// quick_sort(arr,0,arr.length-1);
// console.log(arr);