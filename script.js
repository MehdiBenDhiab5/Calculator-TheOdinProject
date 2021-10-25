//basic calculation functions
function add(a,b){
    return +a + +b
}
function substract(a,b){
    return +a - +b
}
function multiply(a,b){
    return +a * +b
}
function divide(a,b){
    if (b==0){alert("Can't divide by 0!")}
    else{
        return +a / +b
    }
    
}

//calls one of the basic calculation functions on the 2 numbers a and b
function operate(operation,a,b){
    switch(operation){
        case "add": return add(a,b);
        case "substract": return substract(a,b);
        case "multiply": return multiply(a,b);
        case "divide": return divide(a,b);
    }
}

const display = document.querySelector(".display1")
const display2 = document.querySelector(".display2")

//number click
let numOld = ""
let numCurr = ""
const numbers = document.querySelectorAll(".number")
numbers.forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        if (result != "" && op == ""){
            numCurr = ""
            result = ""
            display.textContent = ""
        }
        if(!(numCurr[numCurr.length -1] == "." && elem.textContent==".")){
            numCurr += elem.textContent
        }
        display2.textContent = numCurr
    })
})

//Operation click
let op = ""
const operations = document.querySelectorAll(".operation")
operations.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        if (op != "" && numOld!="" && numCurr!=""){
            calculaterino()
            op = elem.id
            numOld = numCurr
            numCurr = ""
            display2.textContent = ""
        }else if(op!="" && numCurr==""){
            op=elem.id
        }else if (numCurr != ""){
            op = elem.id
            numOld = numCurr
            numCurr = ""
            display2.textContent = ""
        }

        if(op == "add"){ display.textContent = numOld + "+"}
        else if(op == "substract"){ display.textContent = numOld + "−"}
        else if(op == "multiply"){ display.textContent = numOld + "×"}
        else if(op == "divide"){ display.textContent = numOld + "÷"}
    })
})

let result = ""

//equal click
const equal = document.querySelector("#equal")
equal.addEventListener("click",calculaterino)

function calculaterino(){
    if (op != "" && numOld !="" && numCurr!=""){
        result = operate(op,numOld,numCurr)
        display.textContent= result
        display2.textContent = ""
        numCurr=result
        op=""
    }
    if(op!="" && numOld!="" && numCurr==""){
        result = numOld
        numCurr = result
        op = ""
        display.textContent = numOld
        display2.textContent = ""
    }
    
}

//clear
const clear = document.querySelector("#clear")
clear.addEventListener("click",()=>{
    result = ""
    op = ""
    numCurr = ""
    numOld = ""

    display2.textContent = ""
    display.textContent = ""
})