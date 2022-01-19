const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: () => {
    return `${person.firstName} ${person.lastName}`
  }
};
if (person.address && person.address.city){
  console.log(person.address.city); 
}
if (person.fullName()) {
  console.log(person.fullName());
} 