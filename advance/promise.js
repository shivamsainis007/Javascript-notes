// const promiseOne= new Promise( function(resolve,reject){
//     setTimeout(function(){
//         //do Async work
//         console.log('Async work done');
//         //resolve(); 
//     }
// ,1000)
// }
// )
// promiseOne.then(function(){
//     console.log('Promise resolved');
// 
// const { MdEmail } = require("react-icons/md");

    
// })
new Promise(function(resolve,reject){
    setTimeout(function(){
        //do Async work
        ///console.log('Async work done in new promise');
    },1000)
    resolve();
}).then (function(){
//console.log('New promise resolved');
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        //resolve({username:'saini',email:'saini@example.com'})
    },1000)
})
promiseThree.then(function(obj){
    //console.log(obj.username,obj.email)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= false; 
        if (!error){
            //resolve({username:'saini',email:'saini@example.com'})
        }else{
            reject('Error: Something went wrong');
        }
    },1000)
})
promiseFour.then(function(obj){
    //console.log(obj);
    return obj.username;
}).then(function(username){
console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    //console.log('Promise completed');
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true; 
        if (!error){
            resolve({username:'saini',email:'saini@example.com'})
        }else{
            reject('Error: Something went wrong');
        }
    },1000)
})

async function cansumePromisFive() {
    try {
        const response = await promiseFive;
        // console.log(response.username, response.email)
    } catch (error) {
        //console.log(error);
    }
}

cansumePromisFive()
async function getAll(){
try {
    const res=await fetch('https://api.github.com/users/shivamsainis007');
    const data=await res.json();
    // console.log(data);
} catch (error) {
    // console.log(error);
}    
}
getAll();

fetch('https://api.github.com/users/shivamsainis007')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log('Fetch completed');
})