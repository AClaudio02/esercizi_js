const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

function calculateAverageAge(persons) {
  let sumAge = 0;
  for (const person of persons) {
    sumAge += person.age;
  }
  // for(let i = 0; i < persons.length; i++){
  //   sumAge += persons[i].age;
  // }
  return sumAge / persons.length;
}

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);