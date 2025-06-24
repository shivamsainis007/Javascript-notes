/// array
// const myArr=[0,1,2,3,4,5]
//const arr= new Array(1,2,3,4,5)
// console.log(myArr)

// Array method
// arr.push(8)//add last
// console.log(arr)
// arr.pop()//remove last
// console.log(arr)
// arr.unshift(0)//add first
// console.log(arr)
// arr.shift()// remove first
// console.log(arr)

// console.log(arr.includes(5)) //give true or false
// console.log(arr.indexOf(3))// give index otherwise give -1
// console.log(arr.join())// it is give us string value
  
// slice and splice

// console.log("A",arr)
// const arr1= arr.slice(1,3)  // make a copy 
// console.log(arr1)
// console.log("B",arr)
// const arr2=arr.splice(1,3) //change a real arr and give us new array 
// console.log("c",arr)
// console.log(arr2)



// const arr1=[1,2,3,4]
// const arr2=[5,6,7,8,9]
// const allArr=arr1.concat(arr2)// two add array
// console.log(allArr)
// const allnum1=[...arr1,...arr2] to add many aaray loke this 
// console.log(allnum1)



// const anotherArr=[1,,[2,4],5,6,[5,[6,7]]]
// console.log(anotherArr.flat(Infinity))// for single line in array without any another inside in 


const s="shivam"
console.log(Array.isArray(s))///chek true or fasle
console.log(Array.from(s)) // for making array

console.log(Array.from({name:"shivam "})) // it will give us emty array becouse of that no undersatabdable 

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))// for making array of any values




