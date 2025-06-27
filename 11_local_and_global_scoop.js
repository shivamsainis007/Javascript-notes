if(true){
    let a=10
    const b=20
    var c=30
    d=40
}
// console.log(a);//it will give error that a is not difine becouse of a is local for if block
// console.log(b)//it will give error that b is not difine
// console.log(c)//but they will be print
// console.log(d)//it also print

function hello(){
    const name="hitesh"
    function hello2(){
        const website="yt"
        console.log(name + website);
        
        }
    // console.log(website);//it will give error

    hello2()
    
 }
// hello()

if(true){
    const name="hitesh"
    if(true){
        const website=" youtube"
        console.log(name+website);
        
    }
    // console.log(website);//it also
    
}
// console.log(name); //it thrw error
