function executeTwice(func) {
    func();
    func();
}

function sayHello() {
    console.log("Hello!");
    console.log("Hello!");
    console.log("Hello!");
}

executeTwice(sayHello);