const accountsId = 123456;
let accountName = "John Doe";
var accountBalance = 1000.50;
acccountCity = "New York";
let accholderName
// accholderName is a variable that is not declared with var, let, or const
// accountsId = 654321; // This will throw an error because accountsId is a constant


// here we cant cange the value of accountsId because it is a constant
// // but we can change the value of accountName, accountBalance, and acccountCity
// best way to declare variable to use const for constants, let for block-scoped variables, and var for function-scoped variables
console.log(`The account ID is ${accountsId}`);
console.table([accountBalance, accountName, acccountCity , accholderName]);
                  