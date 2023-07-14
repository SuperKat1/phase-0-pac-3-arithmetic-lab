function add(a, b) {
    return a + b;
}

function subtract(a,b)  {
    return a - b;
}

function multiply(a, b)  {
    return a * b;
}

function divide(a, b)  {
    return a / b;
}

function increment(a)  {
    return a += 1;
}

function decrement(a)  {
    return a -= 1;
}

function makeInt(string)  {
    return parseInt(string, 10);
}

function preserveDecimal(string)  {
    return parseFloat(string);
}

console.log(add(1,5));
console.log(subtract(10,5));
console.log(multiply(10,5));
console.log(divide(20, 5));
console.log(increment(56));
console.log(decrement(1000));
console.log(makeInt("3.141592654"));
console.log(preserveDecimal("3.141592654"));