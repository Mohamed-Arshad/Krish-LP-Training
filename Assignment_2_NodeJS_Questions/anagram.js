//Q4) find whether 2 words are anagram?
const isAnagram=(str1,str2)=>{
    return str1.split("").sort().join("").toLowerCase()==str2.split("").sort().join("").toLowerCase();
    //return true: if str1 & str2 are angram
    //return false: if both are not anagram
}
module.exports={isAnagram};
// console.log(isAnagram("listen","silent"));
// console.log(isAnagram("Hi","bye"));