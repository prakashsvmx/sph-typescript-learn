console.log('Modifiers');

//public 
//private
//protected


class Animal{
    //public name:string;// default 
    //private name:string;// default 

    protected name:string;// default 
    constructor(name:string){
        this.name=name;
    }
    getName(){
        return this.name;
    }
    setName(name:string){
        this.name = name;
    }
}


class Dog extends Animal{
    constructor(name:string){
        super(name);
        console.log(this.name);//only  public, protected.
    }
}


const dog:Animal= new Animal('Slpae');
// 
//private console.log(dog.name);//not accessible.

//with Get Set
console.log(dog.getName());
dog.setName('Wolf');
console.log(dog.getName());

//protectd
//console.log(dog.name);// error.


const myDog:Animal = new Dog('OOh');

