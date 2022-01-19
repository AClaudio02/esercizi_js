const person = {
  get firstName() {
    return this.name;
  },
  set firstName(firstName) {
    return this.name = firstName
  } ,
  get lastName() {
    return this.surname;
  },
  set lastName(lastName) {
    return this.surname = lastName
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

}
//  Oggetto "john"
const john = Object.create(person)
  john.firstName = "John"
  john.lastName = "Doe"
// Oggetto "simon"
const simon = Object.create(person)
  simon.firstName = "Simon"
  simon.lastName = "Collins"


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins