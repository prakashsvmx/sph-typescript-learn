console.log('Templates');
var greet = 'Hello';
var num1 = 5;
var num2 = 3;
var total = function (num1, num2) {
    return num1 + num2;
};
var templates = "TS Template " + greet + ", " + total(num1, num2) + "\nMulti line string.\n";
console.log(templates);
console.log(templates.startsWith('TS')); //string methods are possible.
