/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    get name() {
      return `${this.firstname} ${this.lastname}`;
    }
    set name(input) {
      const split = input.split(' ');
      this.firstname = split[0];
      this.lastname = split[1];
      return;
    }
  }

  document.querySelector('#run').onclick = () => {
    // Create new instance
    const person = new Person('John', 'Doe');
    console.log(person.name);

    // Change instance values
    person.name = 'Ronny King';
    console.log(person);
    console.log(person.name);
  };
})();
