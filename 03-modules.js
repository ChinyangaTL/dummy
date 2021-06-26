// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
// const {john, peter} = require('./04-names')
// console.log(names);
const sayHi = require('./05-utils');
sayHi('susan');
// sayHi(john);
// sayHi(peter);
sayHi(names.john);
sayHi(names.peter);

const data = require('./06-alternative-flavor');
console.log(data);
const { items } = data;
console.log(items);
const person = data.singlePerson;
console.log(person);
console.log(person.name);

// will run even though we haven't assigned to any variables or exported in 07.
// when you import a module, you alos invoke it
require('./07-mind-grenade');
