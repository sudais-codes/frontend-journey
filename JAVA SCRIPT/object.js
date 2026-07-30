const people = [
  { name: "Ali", age: 25, city: "Rawalpindi" },
  { name: "Sara", age: 30, city: "Lahore" },
  { name: "Bilal", age: 22, city: "Karachi" },
  { name: "Ayesha", age: 28, city: "Islamabad" },
  { name: "Zain", age: 35, city: "Multan" },
  { name: "Hina", age: 27, city: "Peshawar" },
  { name: "Usman", age: 40, city: "Faisalabad" },
  { name: "Mariam", age: 19, city: "Quetta" },
  { name: "Hassan", age: 33, city: "Sialkot" },
  { name: "Fatima", age: 24, city: "Hyderabad" }
];

console.log(people.length); 
console.log(people[0].name); 
console.log(people[2].city); 


console.log("Using loop to print all values");

people.forEach(function(person){
    console.log(person.name + " is " + person.age + " Years old and lives in " + person.city);
});
