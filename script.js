 /*
 let addMath= (x,y)=>{
    let math = x+y;
    let math1= x-y;
    let result = math*math1;
    return result;
}
let result1 = addMath(5,3);
//console.log(result1);
let addMath1 = ()=> 5;
//console.log(addMath1());
let addMath2 = (x)=> x;
console.log(addMath2(6)); 
*/
/*
function sum(...args){

let result = 0;
for(i= 0; i<args.length; i++){
    result += args[i];

}
  document.write(result);

}
sum(5,4,5,6,7,1,3);
*/
/*
let array1 = [ 1,2,3,4];
let array2 = [5,6,7,8,...array1];
//let array3 = [...array1,...array2];
console.log(array2); 
*/
/*
let score = [4,5,6,3,];
for(let x of score){
    console.log(x);

}
let score1 = [5,6,7,9,8];
for(let z of score1){
    console.log(z);
}
*/
/*
let name = " Mohammad Nazim Hossain";
let age = 21;
console.log(`my name is ${name}, and my age is ${age}.`);
*/
//let book = [ "Advance Javascript" , 200, 150];
//let name = book[0];
//let pages = book[1];
//let price = book[2];
//console.log(pages);
//console.log(price);
//console.log(name);
//let [name ,pages,price] = book;
//console.log(name);
/*
let book = ["Advance Javascript", 200, 150 ,["Rahim", 1920]];
let [name, pages, price ,[publication, year ]]= book;
console.log(publication);
*/
/*
function book (){
    return ["mohammad", 21, "dinajpur", 13]

}
let [name, age, district, study] = book();
console.log(age);
*/
/*
let book  = {
    name : "Advance Javascript",
    page : 200,
    price : 150,
    publication: {
        pubname : "Rahim",
        year : 1930
    }
}
/*
let pro = book.name;
let pages = book.page;
let price = book.price;
console.log(pages);
*/
/*
let { name, page, price,publication:{pubname,year}} = book;
console.log(year);
*/
/*

*****es5 

let person1 = {
    firstName: "Mohammad Nazim",
    lastName : "Hossain",
    age : 21 ,
    fullName: function(){
        console.log(this.firstName+ " "+ this.lastName);
    }

}
person1.fullName();

//console.log(person1.age);
*/
/*
let person2 = {};
person2.name= "Mohammad Nazim Hossain";
person2.age = 21 ;
person2.sayHi= function(){
    console.log("hello this is Nazim ");

}
person2.sayHi();
console.log(person2.age);
*/
/*
function Person ( first , last , a, c){
    this.firstName = first;
    this.lastName = last;
    this.age = a;
    this.country = c;
    this.changeAge= function(newage){
        this.age = newage;

    }
    this.changeCountry = function(newcountry){
        this.country = newcountry;

    }
    

}
let person1 = new Person ("Mohammad Nazim", "Hossain",21,"Bangladesh");
person1.changeAge(20);
person1.changeCountry("Turkey");
let person2 = new Person ("Mohammad", "Rahim", 30, "America");
person2.changeAge(50);
person2.changeCountry("Oman");
console.log(person1);
console.log(person2);
*/
/*
let Person = function(fisrt , last , a){
    this.firstName = fisrt;
    this.lastName = last;
    this.age = a;


}
let person1 = new Person ( "Rahim" , "Uddin", 40);
let person2 = new Person ("Karim", "Uddin", 30);
Person.prototype.fullName = function(){
    console.log(this.firstName+ " " +this.lastName);
}
console.log(person1.fullName());

//console.log(person2);
*/

/*

function Hunature (ls){
    this.lifestyle= ls;

}

Hunature.prototype.breath= function(){
    console.log("breathing")
}
let person3 = new Hunature (100);
//console.log(person3.breath());


let Person = function(fisrt , last , a){
    this.firstName = fisrt;
    this.lastName = last;
    this.age = a;


}
let person1 = new Person ( "Rahim" , "Uddin", 40);
let person2 = new Person ("Karim", "Uddin", 30);
Person.prototype.fullName = function(){
    console.log(this.firstName+ " " +this.lastName);
}

Person.prototype.__proto__= Hunature.prototype;

console.log(person1.fullName());
console.log(person1.breath());
console.log(person2.fullName());
console.log(person2.breath());

//console.log(person2);
*/
//***** es6
/*
class person {
    constructor(first, last, a){
        this.firstName = first;
        this.lastName = last;
        this.age = a;

    }
    sayHI(){
        console.log("hello");
    }
    static name (){
        console.log("this is a static function of class");
    }

}
let person1 = new person ("Mohammad Nazim", "Hossain", 21);
person1.sayHI();
console.log(person1);
 let z =person.name();
console.log(z);
*/ 
/*
class emp {
    constructor(first, last, a){
        this.firstName = first;
        this.lastName = last;
        this.age = a;
    }
    msg(){
        console.log("hello this is emp class function");
    }
}

class manager extends emp {
   constructor(first,last, a, dep, cou){
       super(first,last,a)
       this.depertment = dep;
       this.country = cou;
   }
   msg(){
       console.log("hello this is a manager class function");
   }
   info(){
       //super.msg();
       this.msg();
      console.log( this.firstName+""+this.lastName+" is depertment of "+ this.depertment);
   }

}

//let manager1 = new manager("Mohammad Nazim"," Hossain", 21, "Android development", "Bangladeh");
//console.log(manager1.info());

class admin extends manager{

}
let admin1 = new admin("Mohammad Nazim", "Hossain", 21, "Android Development", "Bangladesh");
console.log(admin1);
*/
/*
let usefulMethod= {
    sayHi(){
        console.log("Hi....")
    },
    sayBye(){
        console.log("Bye....")
    }

}
class user {
    constructor(){
        this.name = "Mohammad Nazim Hossain";

    }
}
//Object.assign(user.prototype,usefulMethod);

//let user1 = new user (this.name);
//console.log(user1.sayBye());


class admin extends user {


}
Object.assign(admin.prototype, usefulMethod);
let admin1 = new admin(this.name);
console.log(admin1.sayBye());

*/
/*
function sum (a, b){
    return a+b;

}
let sumA = (a,b)=>{
    return a+b;
}

console.log(sum(2,4));
console.log(sumA(2,4));
function double (a){
    return 2*a;
    
}
let doubleA = (a)=>{
    return 2*a;
}
console.log(double(10));
console.log(doubleA(10));

*/
//document.addEventListener("click", function(){
  //  console.log("hello...");
//})
/*
document.addEventListener("click", ()=>{
    console.log("hello...");
})
function add (a, b){
    return a-b;
}
console.log(add(5,1));
let add1 = (a, b)=>{
    return a-b;
}
console.log(add1(5,1));
document.addEventListener("click", function(){
    console.log("hello this is a normal function");
})
document.addEventListener("click", ()=>{
    console.log("hello this is a arrow function");
})

*/
/*
function sayHello (){
    console.log("hello.....");
}
function sayHi(){
    console.log("Hi....");
}







function add2(a,b,callback){

    callback();
    return a+b;
    
}
console.log(add2(40,10,sayHello));
console.log(add2(4,4,sayHi));
console.log(add2(5,5,function(){
    console.log("Bye....");
}))
*/
/*
let arr1 = [2,3,4,5,6,7,8];


let arr2 = [];
for(let i= 0; i<arr1.length;i++){
    arr2[i]= arr1[i]*2;

}

console.log(arr2);

let arr3 = arr1.map(function(val){
   return val*4;

});

//console.log(arr3);
let arr3 = arr1.map((val)=>{
    return val*3;
})
console.log(arr3);
*/
/*
let array1 = [10,14,13,3,2,6];
let array2 = array1.filter(function(val){
    return val<10;

})
console.log(array2);

let array3 = array1.filter((val)=>{
    return val>10;
})
console.log(array3);

let array3 = array1.filter(val=> val>10);
console.log(array3);
*/
/*
let team= [
    {
        name: "Mohammad Nazim Hossain",
        position: "Android developer"
    },
    {
        name : "Mohammad Rahim Uddin",
        position: "developer"
    },
    {
        name :"Mohammad karim Uddin",
        position: "ui designer"
    },
    {
        name :"Hasan Mahmud",
        position: "seniour developer"
    },
    {
        name : "Hossain",
        position: "developer"
    }
]

//let developer = team.filter(function(val){
  //  return val.position=="developer";

//})
//console.log(developer);
let developer = team.filter(val=>val.position=="developer");
console.log(developer);
let android = team.filter(e=>e.position=="Android developer");
console.log(android);
let designer = team.filter(a=>a.position=="ui designer");
console.log(designer);
*/
class person {
    constructor(n,a,h,c){
        this.name = n;
        this.age = a;
        this.height= h;
        this.country= c;
    }
    hello(){
        console.log("hello this is a class component")
    }
}
/*
let person1 = new person("Mohammad",21,"8.6","Bangladesh");
console.log(person1);
person1.hello();
*/


class customer extends person{
    sayHello(){
        console.log("hello this is a extended function")
    }

}




let person1 = new customer("Mohammad",21,"8.6","Bangladesh");
console.log(person1);
person1.hello();
person1.sayHello();