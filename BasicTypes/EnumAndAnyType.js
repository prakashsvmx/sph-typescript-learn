var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Yellow"] = 5] = "Yellow";
    Color[Color["Megenta"] = 6] = "Megenta";
    Color[Color["Gray"] = 10] = "Gray";
    Color[Color["myColor"] = 11] = "myColor";
    Color[Color["myindividualValue1"] = 10.5] = "myindividualValue1";
    Color[Color["myindividualValue2"] = 15.5] = "myindividualValue2";
    Color[Color["myindividualValue3"] = 19.5] = "myindividualValue3";
    Color[Color["myindividualValue4"] = 20.5] = "myindividualValue4";
})(Color || (Color = {}));
var x = Color.myindividualValue4;
console.log(x);
//Any Value.
var anyValue;
var anyValueArray;
//anyValue=10;
anyValue = true;
anyValue = "Hello";
anyValue = [1, 2, 3];
anyValue = [1, "hello", 2];
anyValueArray = [1, "hello", 2];
console.log('Any Value:', anyValue, anyValueArray);
