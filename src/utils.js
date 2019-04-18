console.log('in utils');

const square = x => x * x;

const add = (a, b) => a + b;

// const subtract = 
// exports must have variable declarations, can be exported one at a time, or destructured like here
export { square, add };
export default (a, b) => a - b;