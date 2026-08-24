// 1. Define the callback function (the phone number)
function deliverPizza() {
    console.log("Pizza is here! Time to eat.");
}

// 2. Define the main function that accepts the callback
function orderPizza(callback) {
    console.log("Baking the pizza...");
    // The main function does its work, then runs the callback
    callback(); 
}

// 3. Pass the callback function into the main function
orderPizza(deliverPizza);
