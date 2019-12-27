console.log('inheritance')

class Person{
    name:string;
    constructor(name:string){
        this.name= name;
        console.log('Created', this.name);
    }

    sayHello():void{

        console.log(`${this.name} says Hello`);
    }

    printName():void{
        console.log(`Printing ${this.name}`);
    }
}

const sph = new Person('prakash');
console.log(sph.sayHello());


class Customer extends Person{
    id:number
    constructor(id:number, name:string){
        super(name);
        this.id= id;
        console.log(`Customer Created ${this.name}`)
    }

    payBalance():void{
        console.log(`${this.id}: ${this.name} paid balance`)
    }


    pritName():void{
        super.printName();//Call parent implementation.
    }
    //
}


const aCustomer = new Customer(1, 'Mayo');
console.log(aCustomer.pritName())