const fs = require('fs');
let names = fs.readFileSync('names.txt', 'utf8').split(/\r\n/);

const ns=require('./namesort');

console.log(ns.name_sort(names))

