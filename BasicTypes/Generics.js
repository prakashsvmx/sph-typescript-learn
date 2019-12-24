// Not generic
function myStrictFunc(arg) {
    return arg;
}
//Type Erased.
function myStrictFuncAny(arg) {
    return arg;
}
//Generci helps us 
function myGeneric(arg) {
    return arg;
}
var myValue = myGeneric('Hello');
console.log('String:', myValue);
var myValueN = myGeneric(44);
console.log('Number:', myValueN);
var myValueNJustN = myGeneric(44);
console.log('Number:', myValueNJustN);
//Multiple Arguments
function multiArg(arg1, arg2) {
    var str = arg1 + ' ' + arg2;
    return str;
}
var myMulti = multiArg('Multi', 100);
console.log(myMulti);
// Arrays:
function myGenericArray(arg) {
    console.log(arg.length);
    return arg;
}
var result = myGenericArray([1, 2, 3]);
console.log('Array Result:', result);
function myGenericFnInt(arg) {
    return arg;
}
var x = myGenericFnInt;
console.log('Generics:', x(1));
