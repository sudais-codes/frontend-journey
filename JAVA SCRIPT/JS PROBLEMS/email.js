function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!pattern.test(email)) {
    throw new Error("Invalid email address");
  }

  return true;
}

console.log(validateEmail("sudais@gmail.com")); // true

console.log(validateEmail("sudais@gmail")); 
