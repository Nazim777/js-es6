/*
import {account1} from "./modules/account.js";
import { user } from "./modules/user.js";
import {  name} from "./modules/user.js";
import { cooking } from "./modules/user.js";
import {  id} from "./modules/user.js";
import { withdraw } from "./modules/account.js";
import {  deposite} from "./modules/account.js";
import {account2} from "./modules/account.js";
*/
//import { name,id, user, cooking } from "./modules/user.js";
//import { account1, account2, withdraw, deposite } from "./modules/account.js";
/*
cooking();
user();
console.log(account1);
console.log(name);
console.log(id);
withdraw();
deposite();
console.log(account2);
*/
/*
import { user } from "./modules/account.js";
import { user as usr } from "./modules/user.js";
user();
usr();
*/
/*
import * as acnt  from "./modules/account.js";
acnt.deposite();
acnt.user();
*/
/*
import { default as acct } from "./modules/account.js";
import { default as usr  } from "./modules/user.js";
acct();
usr();
*/

//import { user } from "./modules/user.js";
//user();
/*
import { circle,suuare,tringle } from "./modules1/shape.js";
circle();
suuare();
tringle();
*/
/*
let sum1 = (a,b)=>{
    a = a*2;
    return a+b;
}
console.log(sum1(2,4));
let sum = (a,b) => a+b;
console.log(sum(2,5));
let double = (a)=> a*2;
console.log(double(10));
document.addEventListener("click",()=>console.log("hello this is a arrow function"));
*/
/*
let sayHello= ()=> console.log("hello");
let sayBy = ()=> console.log("bye...");
let sayHI= (a,b,fun) =>{
    console.log(a+b);
    fun();

}
sayHI(2,2,sayHello);
*/
/*
let arr = [2,3,4,5,6,7,8];

let arr1 = arr.map((e)=>e*2);
console.log(arr1);
let arr2 = arr.filter((e)=>e<6);
let arr3 = arr.filter((e)=>e>5);
console.log(arr2);
console.log(arr3);
*/

/*
let team = [
    {
        name : "Mohammad",
        position: "android developer"
    },
    {
        name: "Rahim",
        position: "web developer"
    },
    {
        name: " Karim",
        position : "android developer"
    },

]



let position = team.filter((e)=>e.position=="android developer");
console.log(position);

let name = team.filter((e)=>e.name=="Mohammad");
console.log(name);
*/
//let talk = (msg="this is defoult value")=> console.log(msg);
//talk();
//let sum = (...args)=> console.log(args);
//sum(3,5);
/*
let add = (...sum)=> {
    let add1 = 0;
    for(let i = 0; i<sum.length; i++){
        add1 = add1+ sum[i];

    };
    console.log(add1);
}
add(2,6,6);
*/
/*
let array1 = [1,2,3,4,5,6];
let array2 = [7,8,9,...array1];
console.log(array2);
*/