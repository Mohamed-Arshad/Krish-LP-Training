const bubbleS = require('./bubblesort');
const quickS = require('./quicksort');
const selectionS = require('./selectionsort');
const mergeS = require('./mergesort');
const binaryS=require('./binarysearch');
const linearS=require('./linearsearch');

let arr=[10,100,50,-5,89,23,-4,0,55,89,32,44,44,25];


//console.log(bubble.bubble_sort(arr));

//console.log(selectionS.selection_sort(arr));

quickS.quick_sort(arr,0,arr.length-1);
console.log(arr);

//console.log(mergeS.mergesort(arr));

//console.log(binaryS.binarySearch(arr,44));

console.log(linearS.linearSearch(arr,50));
console.log(linearS.globalLinearSearch(arr,44));