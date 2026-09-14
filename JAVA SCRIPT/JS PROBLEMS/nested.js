function getNestedProperty(obj) {
  return obj?.address?.city;
}

const user = {
  name: "Sudais",
  address: {
    city: "Swat"
  }
};

console.log(getNestedProperty(user)); // Swat