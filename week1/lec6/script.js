const { name } = require("ejs");

var x = 15
{
    let x=5;
}
console.log(x);
const func = (x,y) => x+y
func(5,8)



const a1=[1,2,3]
const a2=[4,5,6]
const  a3=[7,8,9]
const a4=[10,11,12]
const arr = [...a1,...a2,...a3,...a4]
console.log(arr)



const max=Math.max(...arr)
console.log(max)

//for of loop
let mynum = [56,558,64,5221,5545,655,78]
sum=0;
for(let num of mynum)
    {
       sum=sum+num;
    }
    console.log(sum)

let txt ="Sumit"
let t="";
for(let ch of txt)
    {
        t+=ch;
    }
console.log(t)


//map

const fruit = new Map([
    ["apple",25],
    ["mango",85],
    ["banana",89]
])
console.log(fruit)
console.log(fruit.get("mango"));

//set
const set = new Set();
set.add("a")
set.add("b")
set.add("a")
set.add("b")
set.add("c")

console.log(set)
//class
 class car{
    
    constructor(x,y)
    {
            this.x=x;
            this.y=y; 
        
    }
 }
 const mycar = new car("merceedes",2000);


 // promise
 const myfunc = () =>{
    return  new Promise((res,rej)=>{
    setTimeout(() => {
        console.log("promise")
        res()
    }, 2000);
 })
}
myfunc().then(()=>{
    console.log("promise resolved")
}).catch((err)=>{
    console.log(err)
})


// js object
const myObj = {
    firstName:"john",
    lastName:"doe",
    age:24

}

let id= Symbol("id");
myObj[id]=4589
console.log(myObj)

//const add

const func2 = (a,b=10) =>{
return a+b;
}

console.log(func2(10,85))