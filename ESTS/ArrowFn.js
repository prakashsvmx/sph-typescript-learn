console.log('Arrow function in TS');
var getUser = function () {
    return "Hello world";
};
var getUserArrow = function (name) { return name + ' John Arrow'; }; //concise body.
console.log(getUserArrow('SPH'));
var add = function (num1, num2) {
    return num1 + num2;
};
var result = add(2, 3);
console.log(result);
/*
var user={
    name:'Hello',
    age:20,
    startAging:function(){
        var self = this;//without this nan will be printed.
        setInterval(function(){
            self.age++;
            console.log(self.age);
        }, 2000);
    }
}

var sph= Object.create(user);
sph.startAging();

*/
/*
var user={
    name:'Hello',
    age:20,
    startAging:function(){ // no arrow here.
        setInterval(()=>{ // this has arrow.
            this.age++;
            console.log(this.age);
        }, 2000);
    }
}

var sph= Object.create(user);
sph.startAging();

*/
