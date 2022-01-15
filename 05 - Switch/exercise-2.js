// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  role = prompt("Inserisci ruolo", "");
  switch (role) {
    case "ceo":
      alert("Il salario del " + role + " è di 2200€");
      break;
    case "cto":  
    case "manager":
      alert("Il salario del " + role + " è di 1800€");
      break;
    case "developer":
      alert("Il salario del " + role + " è di 1500€");
      break;
    case "other":
      alert("Il salario del " + role + " è di 1000€");
    default:
      alert("Credo che tu non abbia inserito il nome del ruolo correttamente");
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);