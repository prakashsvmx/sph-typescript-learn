"use strict";
exports.__esModule = true;
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.getPoints = function () {
        console.log("A triangle poin is", this.points);
        return this.points;
    };
    Triangle.prototype.setPoints = function (points) {
        this.points = points;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.getPoints = function () {
        console.log("A Square point is", this.points);
        return this.points;
    };
    Square.prototype.setPoints = function (points) {
        this.points = points;
    };
    return Square;
}());
exports.Square = Square;
