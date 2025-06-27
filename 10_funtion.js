function saymyanme(){
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");
    
}
// saymyanme()

// Aargument and parameter
function addtwo(number1=10,number2=20){
    return number1+number2
}
addtwo()//it will call the funtion but did not print anything 
// console.log(addtwo(22,88)); // if not pass any argumnet then it will  he defult 

// console.log(addtwo());

// if we dont know how many parameter is comming from funtion
function calculateprice(...num1){
    return num1
}
// console.log(calculateprice(100)); //if print 100
// console.log(calculateprice(100,200,300,400))// it print [100,200,300,400]if we use rest oprater(...num1)
function calculateprices(val1,val2,...num1){
    return num1
}
// console.log(calculateprices(10,20,30,40));


// if we pass the object as argumnets
const user={
    username:"hitesh",
    price:100
}
function handaleobject(anyobject){
    return `username is ${anyobject.username} and price is ${anyobject.price}`
}
// console.log(handaleobject(user));


// hande array as a arguments

const arr=[1,2,3,4]
function handleArray(arr){
    return arr
}
// console.log(handleArray(arr))
