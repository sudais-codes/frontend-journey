const arr1 = [4,2,5,7,9]
const arr2 = [44,90,57,9,12]

const merg = [...arr1, ...arr2]

console.log(merg)

merg.sort((a, b) => a - b);

console.log("AFTER SORTING")
 
console.log(merg)

