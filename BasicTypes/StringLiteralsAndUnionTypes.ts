
//String Literals

let x :'Hello';
x='Hello';
x= null;
x=undefined;

//INVALID
//x='Not working';

console.log(x); 


//UNION TYPE

let myVar: 'Hello' | 'Hello World';

myVar='Hello';

//INVALID
//myVar ='Not working';

console.log(myVar);



let myAdd = function(x:string | number, y:string | number):number{

    if(typeof x ==='string'){
        x= parseInt(x,10)
    }
    if(typeof y ==='string'){
        y= parseInt(y,10)
    }
    return x+y;
    
    }

    console.log(myAdd(3, '2'));
