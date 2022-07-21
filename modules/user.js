 let name = "Mohammad Nazim Hossain";
 let id = 12432;
 import { withdraw} from "./account.js";




 function user (){
    console.log("hello user");
    withdraw();
}

 function cooking (){
    console.log("hello cooking");
}

/*
 export default function (){
    console.log("hello user default function working");
}
*/


//export{ name, id, user, cooking};
export{user};