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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 3) {
        resolve(persons.find((item) => item.id === id));
      } else {
        reject(new Error("Id non presente nella lista"));
      }
    }, 1000);
  });
}

fetchPersonById(2).then((person) => console.log(person));
