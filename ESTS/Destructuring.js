console.log('Destructuring');
var user = {
    first: 'SPH',
    last: 'Vel'
};
var first = user.first, last = user.last;
console.log('Destruct:', first, last);
var users = ['hello', 'world', 'test'];
var user1 = users[0], user2 = users[1], user3 = users[2];
console.log(user1, user2, user3);
//Nested destructuing.
var obj = {
    a: [{ foo: '123', bar: 'abc' }, []],
    b: true
};
var b = obj.a[0].bar;
console.log(b);
//Undefined values with defaut values.
var _a = [][0], x = _a === void 0 ? 'defaultValue' : _a;
console.log(x); //no elements.
