const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  // code here
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(persons.find((persons) => persons.id === id)); 
    }, 1000)
  );
}

// code here
let promise = fetchPersonById(1);
promise
  .then((result) => {
    console.log(result);
    return fetchPersonById(2);
  })
  .then((result) => {
    console.log(result);
    return fetchPersonById(3);
  })
  .then((result) => {
    console.log(result);
  });
