let num1 = "";
let num2 = "";
let operator = "";

function addNumber(num) {

    if (operator === "") {
        num1 += num;
        document.getElementById("result").value = num1;
    }else {
        num2 += num;
        document.getElementById("result").value = num1 + " " + operator + " " + num2;
    }
}


function setOperator(op) {
     operator = op;
    document.getElementById("result").value = num1 + " " + operator;
    }

function calculate() {
    let result;
    switch (operator) {
        case "÷":
            result = parseFloat(num1) / parseFloat(num2);
            break;
        case "x":
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case "-":
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case "+":
            result = parseFloat(num1) + parseFloat(num2);
            break;
    }
    document.getElementById("result").value = result;
    num1 = result.toString();
    num2 = "";
    //num2="" means whatever next result should be a repitition of the previously
    //stated conditions/commands.
    operator = "";
}

function clearResult() {
    num1 = "";
    num2 = "";
    operator = "";
    document.getElementById("result").value = "0";
}