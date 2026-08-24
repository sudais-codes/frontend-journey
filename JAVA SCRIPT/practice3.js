console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000); 

console.log("3");

function fetchUserData(callback) {
  console.log("Fetching user data...");
  setTimeout(() => {
    let user = { name: "Alice", age: 25 };
    callback(user); 
  }, 2000);
}

fetchUserData(function (user) {
  console.log("Got user:", user.name);
});

console.log("This logs before the user data arrives!");