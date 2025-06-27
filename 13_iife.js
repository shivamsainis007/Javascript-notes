// iife

(function chai(name){
    console.log("db cannected");
    console.log(name);
    
})("shivam");  //this is iifi funtion for ignor global polution

((name)=>{
    console.log("bd cannected");
    console.log(name);
    
    
})("hitesh")