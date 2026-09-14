const arr = [10,2,3,44,54];


const total =  arr.reduce((accumulator , n) => {
    return accumulator + n;
}, 0)

console.log(total);
