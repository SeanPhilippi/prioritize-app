import React from 'react';
import ReactDOM from 'react-dom';
import PrioritizeApp from './components/PrioritizeApp';

class OldSyntax {
  constructor() {
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi. My name is ${this.name}.`;
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

// -----------

class NewSyntax {
  name = 'Jen';
  getGreeting = () => {
    // always going to be bound to the class instance do to ES6 arrow function
    return `Hi. My name is ${this.name}`;
  }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log('new', newGetGreeting());

ReactDOM.render(<PrioritizeApp />, document.getElementById('app'));