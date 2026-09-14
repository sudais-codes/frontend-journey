function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const multiplyBy5 = multiplyBy(5);

console.log(multiplyBy5(10));
console.log(multiplyBy5(3));