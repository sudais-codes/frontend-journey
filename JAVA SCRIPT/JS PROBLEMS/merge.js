function merge(obj1, obj2){
    return {...obj1, ...obj2};
}

const obj1 = {
    name : "Sudais khan",
    age : 19,
};
const obj2 = {
    field : "SE",
    age : 19,
};

const result = merge(obj1,obj2);

console.log(result);