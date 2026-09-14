const arr = [[1, 2], [3, 4], [5, 6]];

const result = [];

for (let subArray of arr) {
    for (let value of subArray) {
        result.push(value);
    }
}

console.log(result);