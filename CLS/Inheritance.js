var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('inheritance');
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log('Created', this.name);
    }
    Person.prototype.sayHello = function () {
        console.log(this.name + " says Hello");
    };
    Person.prototype.printName = function () {
        console.log("Printing " + this.name);
    };
    return Person;
}());
var sph = new Person('prakash');
console.log(sph.sayHello());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        console.log("Customer Created " + _this.name);
        return _this;
    }
    Customer.prototype.payBalance = function () {
        console.log(this.id + ": " + this.name + " paid balance");
    };
    Customer.prototype.pritName = function () {
        _super.prototype.printName.call(this); //Call parent implementation.
    };
    return Customer;
}(Person));
var aCustomer = new Customer(1, 'Mayo');
console.log(aCustomer.pritName());
