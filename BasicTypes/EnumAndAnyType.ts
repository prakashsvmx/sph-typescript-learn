enum Color{
    Red,//0
    Blue,//1
    Green,//2

    Yellow =5,
    Megenta,// will be 6.


    Gray=2*5,
    myColor, // will be 11


    myindividualValue1 =10.5,// will not be sequence.
    myindividualValue2 =15.5,//will not be sequence.
    myindividualValue3 =19.5,//will not be sequence.
    myindividualValue4,// will be 20.5 (+1 always); 

    
}


let x:Color=Color.myindividualValue4;

console.log(x);



//Any Value.
let anyValue:any;

let anyValueArray:any[]

//anyValue=10;
anyValue=true;
anyValue="Hello"
anyValue=[1, 2, 3];
anyValue=[1,"hello",2];

anyValueArray=[1,"hello",2];

console.log('Any Value:',anyValue,anyValueArray);