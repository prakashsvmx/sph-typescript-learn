
// Not generic
function myStrictFunc(arg:number):number{
    return arg;
}

//Type Erased.
function myStrictFuncAny(arg:any):any{
    return arg;
}

//Generci helps us 

function myGeneric<T>(arg:T):T{

    return arg;
}


let myValue=myGeneric<string>('Hello');
console.log('String:',myValue);


let myValueN=myGeneric<number>(44);
console.log('Number:',myValueN);


let myValueNJustN=myGeneric(44);
console.log('Number:',myValueNJustN);



//Multiple Arguments
function multiArg<T1, T2>(arg1:T1, arg2:T2){
    let str=arg1+' '+ arg2;
    return str;

}

let myMulti = multiArg('Multi',100);
console.log(myMulti);



// Arrays:

function myGenericArray<T>(arg:T[]):T[]{

    console.log(arg.length);
    return arg;
}

let result=myGenericArray([1, 2,3])
console.log('Array Result:',result);



//Interfaces and  Generics
interface MyGenerciFn{
    <T>(arg: T):T;
}

function myGenericFnInt<T>(arg:T){
    return arg;
}

let x:MyGenerciFn = myGenericFnInt;
console.log('Generics:',x(1));