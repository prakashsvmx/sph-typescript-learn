var Time = /** @class */ (function () {
    function Time() {
    }
    Time.prototype.setTime = function (d) {
        this.current = d;
    };
    Time.prototype.getTime = function () {
        console.log('Current is ', this.current);
        return this.current;
    };
    return Time;
}());
var clock = new Time();
clock.setTime(new Date());
console.log(clock.getTime());
