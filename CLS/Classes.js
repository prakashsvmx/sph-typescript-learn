console.log('Classes');
var Person = /** @class */ (function () {
    function Person(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        console.log('Init constructor');
    }
    Person.prototype.sayHello = function () {
        var retValue = this.firstName + ' says Hello';
        console.log(retValue);
        return retValue;
    };
    return Person;
}());
var sph = new Person('S', 'PH', 34);
sph.sayHello();
console.log(sph.age);
sph.age = 55;
console.log(sph.age);
var test = new Person('test', 'name', 23);
test.sayHello();
