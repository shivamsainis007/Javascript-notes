// Object 
// single tan

// object litrels
// const mySym=Symbol("key1")
// const JsUser={
//     name:"hitesh",
//     "full name ":"shivam kumar",
//     [mySym]:"myKey1",//here is only syntax fordifine a symbool  
//     age:22,
//     location:"muz",
//     isLoggedIn:false
// }
// JsUser.name="shivam"
// // Object.freeze(JsUser)
// JsUser.name="pagalet"
// console.log(JsUser["name"])

// JsUser.greerting=function(){
//     console.log("helllo Js user ")
// }
// JsUser.greerting2=function(){
//     console.log(`helllo Js user ,${this.name}`)
// }
// console.log(JsUser.greerting())
// console.log(JsUser.greerting2())


// console.log(JsUser.age)
// console.log(JsUser["name"])
// console.log(JsUser["full name "])//here we can not use . for acces 
// console.log(typeof JsUser[mySym])

// const tinderUser=new Object()// this is a single tan object

// const tinderUser={}//non singletan object

// tinderUser.id=123
// tinderUser.name="sammy"
// tinderUser.isloggedIn=false

// console.log(tinderUser)


// we can assin the object inside the object

const regularUser={
    email:"shivam@gmail.com",
    userFullname:{
        firstName:"shivam",
        lastName:"kumar"
    }

}
// console.log(regularUser.userFullname.firstName);
// console.log(regularUser.id);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);
const obj4={...obj1,...obj2}//other way to combin to object
// console.log(obj4);


const user=[
    {
        id:1,
        name:" "
    },
    {
        id:2,
        name:" "
    }
]
console.log(user[1].id);

const tinderUser={}//non singletan object

tinderUser.id=123
tinderUser.name="sammy"
tinderUser.isloggedIn=false

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// Dsturacture of object

const course={
    coursename:"js",
    price:999,
    courseTeacher:"hiteesh"
}
const {courseTeacher:Teacher}=course
console.log(Teacher);

const navbar=() =>{}
navbar(name)="hitesh"


// API   JSON FILE FORMAT (Object tyep)
// {
//     "name":"hitesh",
//     "course":"js",
//     "price ":"free"
// }

// API ALSO IN ARRAY FORMAT 







