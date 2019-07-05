import defaultThing, { square, add } from './utils.js';
import goo, { isAdult, canDrink } from './person';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(2, 3));

console.log(isAdult(5));
console.log(canDrink(22));
console.log(goo(64));
// can import default exports under whatever name we want, but not for regular functions
console.log(defaultThing(3, 46));

// person.js
// named export isAdult(18) - true if adult, else false
// named export canDrink(18) - true if 21 and over, else false