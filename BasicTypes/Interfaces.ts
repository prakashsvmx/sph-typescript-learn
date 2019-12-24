console.log('Interfaces in typescript..')

function displayUser(user:{
    firstName:string,
    lastName:string
}){



    console.log(user.firstName + ' ' + user.lastName);
}

let myUser = {
    firstName:'John',
    lastName:'OJoe'
}
console.log(displayUser(myUser));


//Interface



interface TUser {
    firstName:string,
    lastName:string,
    email?:string //optional
}




function displayTUser(user:TUser){
    console.log(user.firstName + ' ' + user.lastName+' '+ user.email);
}


let myTUser = {
    firstName:'My ',
    lastName:'T User',
    email:'hell@ts.com'
   // sex:'F'
}

console.log(displayTUser(myTUser));


//Extending

interface Mebership{
    type:string
}

interface PremiumUser extends Mebership{
    firstName:string,
    lastName:string,
}


function displayPremiumUser(user:PremiumUser){

    console.log(user.firstName+' '+ user.lastName+ ' Membership Type:'+ user.type);
}

const aPremUser ={
    firstName:'Premium',
    lastName:'Last',
    type:'GOLD'
};

displayPremiumUser(aPremUser);


// Function Rule
interface userFunc {
    (name:string, age:number):string
}


let getUser:userFunc;
//getUser(name, age) - acceptable
//geUser(myName, myAge) -acceptable

getUser=(name:string, age:number):string =>{

    return `${name} is ${age} years old`;
};

console.log(getUser('Me', 30));
