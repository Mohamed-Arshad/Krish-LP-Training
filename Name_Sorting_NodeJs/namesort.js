const name_sort=(name_array)=> {
    let numbers = []; //aray which stores names number
    for (let i = 0; i < name_array.length; i++) {
        numbers[i] = calculateNumber(name_array[i].toLowerCase());
    }
    quicksort(numbers, 0, numbers.length - 1, name_array);
    searchForSameNumber(numbers, name_array);
    return name_array;
}

const calculateNumber=(name)=>{
    let num = 0;
    for (let i = 0; i < name.length; i++) {
        //this will give a=1,b=2,c=3.....z=26
        //it ignores " " (space)
        num += name.charAt(i) == " " ? 0 : (name.charCodeAt(i) - 96);
    }
    return num;
}

const quicksort=(numbers, mostleft, mostright, name_array)=>{
    if (mostleft < mostright) {
        let p = partition(numbers, mostleft, mostright, name_array);
        quicksort(numbers, mostleft, p - 1, name_array);
        quicksort(numbers, p + 1, mostright, name_array);
    }
}

const partition=(numbers, mostleft, mostright, name_array)=>{
    let pivot = numbers[mostright];
    let pointer = mostleft;
    for (let i = mostleft; i < mostright; i++) {
        if (pivot > numbers[i]) {
            swap(numbers, i, pointer);
            swap(name_array, i, pointer); //swap the original name array
            pointer++;
        }
    }
    swap(numbers, pointer, mostright);
    swap(name_array, pointer, mostright); //swap the original name array
    return pointer;
}

const swap=(arr, leftindex, rightindex)=>{
    let temp = arr[leftindex];
    arr[leftindex] = arr[rightindex];
    arr[rightindex] = temp;
}

const searchForSameNumber=(numbers, name_aray)=>{
    let i = 0;
    for (let j = 1; i < numbers.length;) {
        if (numbers[i] != numbers[j]) {
            i++;
            j++;
        } else {
            while (numbers[i] == numbers[j]) {
                j++;
            }
            let names_with_same_number = name_aray.slice(i, j);
            names_with_same_number.sort();
            name_aray.splice(i, (j - i), ...names_with_same_number);
            i = j - 1;
        }
    }
}
module.exports={name_sort};

let arr=['aac','aab','caa','ya','z','nab'];
console.log(name_sort(arr));