let score="33 123ad"
console.log(typeof score)
console.log(typeof (score))
let scoreNUmber=Number(score)
console.log(typeof scoreNUmber)
console.log(scoreNUmber) // 33 
// "33"=> 33
// "123ad"=> NaN (Not a Number)
// true=>1

let bool=0  // if there are 0 0r 1 then it will bhee true or false if there are any other value then it will be true and if ther are empty string then it will be false otherwise it will be true
let booleabnValue=Boolean(bool)
console.log(typeof booleabnValue) // boolean
console.log(booleabnValue) // true

let num=888
let numString=String(num)
console.log(typeof numString) // string
console.log(numString) // "888"