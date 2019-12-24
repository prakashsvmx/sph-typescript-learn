function add(x, y) {
    return x + y;
    //return "";
}
var result = add(3, 2);
//Invalid
//result= add('invlud', 2);
console.log(result);
//Annnonymouns
var myAdd = function (x, y) {
    return x + y;
};
console.log('My Add', myAdd(3, 2));
//console.log('My Add', myAdd('3', 2))
//Optionals
function fullName(first, lastname) {
    return first + ' ' + (lastname || ''); //safety
}
var nameResult = fullName('PS', 'VE');
nameResult = fullName('PS'); // will work becoz of ? in argument. // lastname is undefined.
console.log(nameResult);
function fullNameRestArgs(first) {
    var restArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restArgs[_i - 1] = arguments[_i];
    }
    return first + ' ' + (restArgs.join(' '));
}
var fullNameRestArgsRes = fullNameRestArgs('PS', 'VE', 'More args');
console.log('Rest args:', fullNameRestArgsRes);
