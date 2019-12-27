console.log('Arrow function in TS');

let getUser = function():string{
    return "Hello world";
}


let getUserArrow = (name:string):string => name + ' John Arrow';//concise body.

console.log(getUserArrow('SPH'));

let add =(num1:number, num2:number):number =>{

    return num1+ num2;

}

const result:number= add(2, 3);

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



