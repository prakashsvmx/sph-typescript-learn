console.log('Working Let Const');

let a=10;

const b=10;

//gobal let and var are same.

function showVar(){
    var a=33;

    if(true){
        var a=44;// will impact the outer declaration. // no block scope
        console.log('Inside', a);
    }
    console.log(a);
}


showVar();

function showLet(){
    let a=33;

    if(true){
        let a=44;// will NOT impact the outer declaration. //  block scope
        console.log('Inside', a);
    }
    console.log(a);
}


showLet();


//With var
for(var i=0;i<2;i+=1){
    console.log('Loop Iter',i)
}

console.log('Outside:',i);//2 


//

for(let j=0;i<2;j+=1){
    console.log('Loop Iter Let',j)
}

//console.log('Outside Let:',j);//ERROR 



