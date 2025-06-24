// Object 
// single tan

// object litrels
const mySym=Symbol("key1")
const JsUser={
    name:"hitesh",
    "full name ":"shivam kumar",
    [mySym]:"myKey1",//here is only syntax fordifine a symbool  
    age:22,
    location:"muz",
    isLoggedIn:false
}
JsUser.name="shivam"
// Object.freeze(JsUser)
JsUser.name="pagalet"
console.log(JsUser["name"])

JsUser.greerting=function(){
    console.log("helllo Js user ")
}
JsUser.greerting2=function(){
    console.log(`helllo Js user ,${this.name}`)
}
console.log(JsUser.greerting())
console.log(JsUser.greerting2())


// console.log(JsUser.age)
// console.log(JsUser["name"])
// console.log(JsUser["full name "])//here we can not use . for acces 
// console.log(typeof JsUser[mySym])


