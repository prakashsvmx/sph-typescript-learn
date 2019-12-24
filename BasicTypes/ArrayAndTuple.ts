let myArray:number[];
let myBool:boolean[];
let myStr:string[];

myArray=[1,2,3];

//Invalid:
//myArray=1;
//myArray=['1','2','3'];
//let a1=['1','2','3'];
//myArray=a1;


myBool=[true, false];
myStr=["hello", "world"];

console.log(myArray, myBool, myStr);

//Alternative Syntax:
let myArrayGen:Array<number> ;
let myArrayBool:Array<boolean>;
let myArrayStr:Array<boolean>;

myArrayGen=[1, 2,3,];

//Invalid 
//myArrayGen=[true, false];
//myArrayGen=[1, 2,3,'hello'];


console.log(myArrayGen);



let arrayCombined:[number, string];

arrayCombined=[1, 'Hello'];


//Invalid values
//arrayCombined=[1, ];
//arrayCombined=[1, 1];
//arrayCombined=[ ];
//arrayCombined=[1, 'Hello', 6,5,'tell','not a outside of scope'];

//Type safety in action
console.log(arrayCombined[1].substr(1));
//ERORO: !!!
//console.log(arrayCombined[0].substr(1));


console.log(arrayCombined);