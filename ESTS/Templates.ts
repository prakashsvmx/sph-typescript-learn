console.log('Templates')

let greet:string='Hello';
let num1=5;
let num2=3;

let total = (num1:number, num2:number):number=>{
return num1+ num2;
}


let templates:any =`TS Template ${greet}, ${total(num1, num2)}
Multi line string.
`;
console.log(templates);

console.log(templates.startsWith('TS'));//string methods are possible.
