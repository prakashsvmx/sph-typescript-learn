//String Literals
var x;
x = 'Hello';
x = null;
x = undefined;
//INVALID
//x='Not working';
console.log(x);
//UNION TYPE
var myVar;
myVar = 'Hello';
//INVALID
//myVar ='Not working';
console.log(myVar);
var myAdd = function (x, y) {
    if (typeof x === 'string') {
        x = parseInt(x, 10);
    }
    if (typeof y === 'string') {
        y = parseInt(y, 10);
    }
    return x + y;
};
console.log(myAdd(3, '2'));
