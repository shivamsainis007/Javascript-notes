const arr=[1,2,3,4,5];
const val=arr.forEach(element => {
    
});
// console.log(val); // undefined, because forEach does not return anything

// filter
const filteredArr = arr.filter(element => element > 2);//filter return the value

// console.log(filteredArr); // [3, 4, 5]

const book=[
    {title:"book1",price:100},
    {title:"book2",price:200},
    {title:"book3",price:300},
    {title:"book4",price:400},
    {title:"book5",price:500}
]

const filteredBook = book.filter(book => book.price > 300);
// console.log(filteredBook); // [{title:"book4",price:400},{title:"book5",price:500}]   like this we acess the value
// map
const mappedArr = arr.map(element => element * 2); // map returns a new array with the results of calling a function on every element
// console.log(mappedArr); // [2, 4, 6, 8, 10]

// +++++++++++++++++++++++++++++channing map and filter together++++++++++++++++++++++++++++++
const mappedFilteredArr = arr.filter((element) => element > 2).map((element) => element * 2);
// console.log(mappedFilteredArr); // [6, 8, 10]

// reduce
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // reduce applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
// console.log(sum); // 15

const total = arr.reduce((acc,curr) => (    acc + curr),0); // reduce can also be used to calculate the total of an array
console.log(total); // 15
const shopingCart =[
    {
        itemName:"book1",
        price:100,
    },
    {
        itemName:"book2",
        price:200,
    },
    {
        itemName:"book3",
        price:300,
    },
    {
        itemName:"book4",
        price:400,
    },
    {
        itemName:"book5",
        price:500,
    }
]

 const ttotal=shopingCart.reduce((acc,curr) => (acc + curr.price),0); // reduce can also be used to calculate the total price of items in an array of
console.log(ttotal)