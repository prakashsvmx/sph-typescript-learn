//Void Udefined.

//void is opposite of any. means do not want to return anything.

function logData(data:any):void{
    console.log(data);
}
console.log(logData(1));


//Other types

let anUndefind:undefined= undefined;// undefined type.
let aNull:null=null;// null type;
let aVoid:void=undefined;// void type. can only be assinged undefined.


console.log('Other Null, undefind, void types:', aNull, anUndefind, aVoid);


//never type,

function error(message:string):never{ //should NEVER return anything.
    throw new Error('Oops happenend');
}
console.log(error('Hello'));

//------------------

//Not valid.
/*function simpleFn(message:string):never{
    console.log('I will have implicit return ')
    //return is reachable for this function.
}
console.log(simpleFn('Hello'));
*/

