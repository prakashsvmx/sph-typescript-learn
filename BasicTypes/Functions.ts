function add(x:number, y:number):number{
    return x+y;
    //return "";
}


let result:number = add(3, 2);

//Invalid
//result= add('invlud', 2);
console.log(result);


//Annnonymouns

let myAdd = function(x:number, y:number):number{
return x+y;

}
console.log('My Add', myAdd(3, 2))

//console.log('My Add', myAdd('3', 2))



//Optionals

function fullName (first:string, lastname?:string){
    return first+' '+(lastname || '');//safety
}


let nameResult = fullName('PS','VE');
nameResult = fullName('PS');// will work becoz of ? in argument. // lastname is undefined.
console.log(nameResult);



function fullNameRestArgs (first:string, ...restArgs:string[]){
    return first+' '+(restArgs.join(' '));
}


let fullNameRestArgsRes = fullNameRestArgs('PS','VE','More args');

console.log('Rest args:', fullNameRestArgsRes);
