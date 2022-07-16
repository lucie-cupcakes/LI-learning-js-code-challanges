// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

const username = Symbol('username');
const password = Symbol('password');

const user = {
    [username]: 'johndoe',
    [password]: 'xX!S3cretP4s$W0Rd!X',
    age: 25
}

console.log('age', user.age);
console.log('username', user.username);
console.log('password', user.password);
