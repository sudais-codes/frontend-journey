const users = [
  { name: "Ali", city: "Swat" },
  { name: "Ahmed", city: "Peshawar" },
  { name: "Sara", city: "Swat" },
  { name: "Hamza", city: "Islamabad" },
  { name: "Zain", city: "Peshawar" }
];

const uniqueCities = [...new Set(users.map(user => user.city))];

console.log(uniqueCities);