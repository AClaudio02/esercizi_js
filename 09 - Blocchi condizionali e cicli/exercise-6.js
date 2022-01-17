const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};


function getKeys(obj) {
  for (let obj in person) {
    console.log(obj);
  }
  //  return Object.keys(person);
}



const keys = getKeys(person);
console.log(keys);
