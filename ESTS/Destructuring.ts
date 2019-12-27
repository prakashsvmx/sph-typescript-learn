console.log('Destructuring');

const user={
    first:'SPH',
    last:'Vel'
};


const {first, last} = user;

console.log('Destruct:', first, last);

const users = ['hello', 'world','test'];

const [user1, user2, user3] = users;


console.log(user1, user2, user3);


//Nested destructuing.
const obj={
    a:[{foo:'123', bar:'abc'},[]],
    b:true,
}

const {a:[{bar:b}]} = obj;

console.log(b);


//Undefined values with defaut values.
const [x='defaultValue']=[];

console.log(x);//no elements.

