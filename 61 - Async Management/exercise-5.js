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

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

// core here

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const checkId = persons.find((item) => item.id === id);
      if (checkId) {
        resolve(checkId);
      } else {
        reject(new Error("Id non presente nella lista"));
      }
    }, 1000);
  });
}
function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const checkId = jobs.find((item) => item.id === id);
      if (checkId) {
        resolve(checkId);
      } else {
        reject(new Error("Id non presente nella lista"));
      }
    }, 500);
  });
}

Promise.any([fetchPersonById(1), fetchJobById(1)])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
