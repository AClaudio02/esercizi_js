class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get name() {
    return this.firstName;
  }
  set name(name) {
    return this.firstName = name;
  }
  get surname() {
    return this.lastName;
  }
  set surname(surname) {
    return this.lastName = surname;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
