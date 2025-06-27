const user={
    username:"hitesh",
    price:99,
    welcomemessage:function  (){
      console.log(`${this.username} ,welcome on my website`);//with help of this word we can acces current context varable nad here is our current context is this object
      console.log(this);//it willl print all variable of user becouse this keyword refer currabt cobtext
      
      
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// console.log(this);


// Arrow funtion
// const addTwo = (num1 ,num2) => {
//     return num1+num2
// }
const addTwo=(num1,num2)=> (num1+num2)
// console.log(addTwo(2,3));

// return object using arrow funtion
const returnObject=()=> ({username:"hitesh"})
console.log(returnObject());


