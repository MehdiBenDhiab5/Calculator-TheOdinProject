//basic calculation functions
function add(a,b){
    return a + b
}
function substract(a,b){
    return a - b
}
function multiply(a,b){
    return a * b
}
function divide(a,b){
    return a / b
}

//calls one of the basic calculation functions on the 2 numbers a and b
function operate(operation,a,b){
    return operation(a,b)
}
