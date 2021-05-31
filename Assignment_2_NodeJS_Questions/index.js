const thirdLargenum = require('./thirdlargestnumber');
const countrep = require('./countrepetition');
const missingnum = require('./missingnumber');
const anagram = require('./anagram');

//Q1) find third largest number?
let arr = [-5, 78, 23, 100, 0, 99, 25, 90, 88, 77, 88, 12];
console.log(thirdLargenum.find3rdLargestNum(arr));

//Q2)count repetition charecters of given sentence?
let str = "My name is Arshad";
console.log(countrep.repetetioncount(str));

//Q3)find the missing number in given sequence?
let num = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
console.log(missingnum.findMissingNumber(num));

//Q4)find whether 2 words are anagram?
let word1 = "listen";
let word2 = "silent";
if (anagram.isAnagram(word1, word2)) {
    console.log(word1 + " and " + word2 + " are anagam");
} else {
    console.log(word1 + " and " + word2 + " are not anagram");
}