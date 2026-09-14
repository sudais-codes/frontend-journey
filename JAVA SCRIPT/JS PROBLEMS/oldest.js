const users = [
    { name: "Ali", age: 22 },
    { name: "Ahmed", age: 35 },
    { name: "Usman", age: 28 },
    { name: "Hamza", age: 40 }
];

function findOldest(users) {
    return users.reduce((oldest, user) => {
        return user.age > oldest.age ? user : oldest;
    });
}

console.log(findOldest(users));