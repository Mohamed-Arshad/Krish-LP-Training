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
module.exports={repetetioncount};
//console.log(repetetioncount("Arshad Suraj"));