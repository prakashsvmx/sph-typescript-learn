console.log('Interfaces in typescript..');
function displayUser(user) {
    console.log(user.firstName + ' ' + user.lastName);
}
var myUser = {
    firstName: 'John',
    lastName: 'OJoe'
};
console.log(displayUser(myUser));
function displayTUser(user) {
    console.log(user.firstName + ' ' + user.lastName + ' ' + user.email);
}
var myTUser = {
    firstName: 'My ',
    lastName: 'T User',
    email: 'hell@ts.com'
    // sex:'F'
};
console.log(displayTUser(myTUser));
function displayPremiumUser(user) {
    console.log(user.firstName + ' ' + user.lastName + ' Membership Type:' + user.type);
}
var aPremUser = {
    firstName: 'Premium',
    lastName: 'Last',
    type: 'GOLD'
};
displayPremiumUser(aPremUser);
var getUser;
//getUser(name, age) - acceptable
//geUser(myName, myAge) -acceptable
getUser = function (name, age) {
    return name + " is " + age + " years old";
};
console.log(getUser('Me', 30));
