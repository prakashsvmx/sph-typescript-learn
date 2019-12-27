console.log('Classes')

class Person{
    firstName:string;
    lastName:string;
    age:number;
    constructor(first:string, last:string, age:number){

        this.firstName = first;
        this.lastName=last;
        this.age= age;
        console.log('Init constructor', )
    }

    sayHello():string{
        const retValue:string = this.firstName+' says Hello';
        console.log(retValue)

        return retValue;
    }
    
}


const sph = new Person('S','PH', 34);
sph.sayHello();

console.log(sph.age);
sph.age=55;
console.log(sph.age);


const test = new Person('test', 'name', 23);

test.sayHello();
