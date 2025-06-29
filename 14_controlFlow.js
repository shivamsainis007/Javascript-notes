// controlflow
// 1. if-else
// let temperature = 30;
// if (temperature>25) {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }
// >,<,<=,>=,==,!= conditions check  ===(type and value), !==(type and value)
// const age = 18;
// const aadarcrad= true;
// if (age >= 18 && aadarcrad) {
//     console.log("You can vote");
// }
// // or operator give me cod
// if (age >= 18 || aadarcrad) {
//     console.log("You can vote");
// }

// ++++++++++++++++++++++++swich case++++++++++++++++++++++++
// 



// +++++++++++++++++++++++++ truethy and falsy values +++++++++++++++++++++++++
// const useremail = "hitesh@gmail.com"
// if (useremail) {
//     console.log("Email is present");
// }else {
//     console.log("Email is not present");
// }

// // falsy values
// false, 0,-0, "", null, undefined, NaN,BigInt 0n

// // truthy values
// "0", " ", [], {}, function(){}, true, 1, -1, BigInt 1n

// const arr=[]
// if (len(arr)===0) {
//     console.log("Array is present");
// }

// const user = {}
// if (Object.keys(user).length === 0){
//     console.log("User is present");
// }

// nullish coalescing operator
let val
// val= null ?? "default value";
// console.log(val); // "default value"
// val =undefined ?? "default value";
// console.log(val); // "default value"
// val=null ?? 10 ??20
// console.log(val); // 10

// val=null ?? undefined ?? "default value";
// console.log(val); // "default value"

// Ternary operator  
// (condition) ? console.log("True") : console.log("False");
const age = 18;
(age >= 18) ? console.log("You can vote") : console.log("You cannot vote");