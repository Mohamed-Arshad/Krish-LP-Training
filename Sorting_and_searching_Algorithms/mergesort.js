//let arr=[10,100,50,-5,89,23,-4,0,55,89,32,44,44,25];

//merge sort
const merge = (leftArr, rightArr) => {
    let arr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            arr.push(leftArr.shift());
        } else {
            arr.push(rightArr.shift());
        }
    }
    return [...arr, ...leftArr, ...rightArr];
}

const mergesort = (array) => {
    if (array.length < 2) {
        return array;
    }
    let half = Math.floor(array.length / 2);
    let left = array.slice(0, half);
    let right = array.slice(half, array.length);
    return merge(mergesort(left), mergesort(right));
}

module.exports = {mergesort};

//console.log(mergesort(arr));