// loops 
// for loops
// let arr=[1,2,3,4,5]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(`element is :${element}`);
    
// }

// for (let i = 1; i <= 5; i++) {
//     for (j=1; j<=5;j++){
//         console.log(i+"*"+j+"="+i*j);
        
//     }
    
// }

// brack and continue
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         console.log("Skipping the rest of the loop when i is 3");
//         continue; // skip the rest of the loop when i is 3
//     }
//     console.log(`Current value of i: ${i}`);
// }
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         console.log("Breaking the loop when i is 3");
//         break; // exit the loop when i is 3
//     }
//     console.log(`Current value of i: ${i}`);
// }

// +++++++++++++++++++++++++++ while loop +++++++++++++++++++++++++++
// let i = 1;
// while (i <= 5) {
//     console.log(`Current value of i: ${i}`);
//     i++;
// }

// +++++++++++++++++++++++++++ do while loop +++++++++++++++++++++++++++
// let i= 1;
// do {
//     console.log(`Current value of i: ${i}`); //it print al liest one time
//     i++;
// }while (i <= 5);


// +++++++++++++++++++++++++++ for of loop +++++++++++++++++++++++++++
// const arr = [1, 2, 3, 4, 5];
// for (const element of arr) {
//     console.log(`Element is: ${element}`);
// }

// const str = "Hello";
// for (const char of str) {
//     console.log(`Character is: ${char}`);
// }

// +++++++++++++++++++++++++++ for in loop +++++++++++++++++++++++++++
// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const value = obj[key];
//         console.log(`Key: ${key}, Value: ${value}`);
//     }
// }
// +++++++++++++++++map++++++++++++++++++++++++++++++
const myMap=new Map();
myMap.set("name","John");
myMap.set("age",30);
myMap.set("city","New York");
for(const [key, value] of myMap) {
    // console.log(`Key: ${key}, Value: ${value}`);
}

// ++++++++++++++++++++++for each++++++++++++++++++++++++++++++
const arr = [1, 2, 3, 4, 5];
arr.forEach((element, index) => {   /// here we use a funtion as a parameter
    // console.log(`Element at index ${index} is: ${element}`);
});

 function printme(item){
   
    // console.log(`Element is: ${item}`);
 }
    arr.forEach(printme); // passing a function as a parameter

arr.forEach((item, index,arr)=> {
    // console.log(`Element at index ${index} is: ${item}`);
    // console.log(`Array is: ${arr}`)
})


const arr1=[
    {name:"John",
    age:30},
    {name:"Jane",age:25},
    {name:"Doe",age:35}
]

arr1.forEach((item, index) => {
    console.log(`Name: ${item.name}, Age: ${item.age}, Index: ${index}`);
})