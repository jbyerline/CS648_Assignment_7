//STEP 1
let number;

function halfNumber() {
    window.document.write("Half of " + number + " is " + number / 2 + ".<br>");
}

number = parseFloat(window.prompt("STEP 1. Half of a number. \nEnter a number:"));
halfNumber();

//STEP 2
let number;
function squareNumber() {
    window.document.write("The result of squaring a number " + number + " is " + number * number + ".<br>");
}

number = parseFloat(window.prompt("STEP 2. Squaring a number. \nEnter a number:"));
squareNumber();

//STEP 3
let firstNumber, secondNumber;

function percentOf() {
    window.document.write(firstNumber + " is " + firstNumber / secondNumber * 100 + "% of " + secondNumber + ".<br>");
}

firstNumber = parseFloat(window.prompt("STEP 3. Percent the first number represents of the second number. \nEnter a first number:"));
secondNumber = parseFloat(window.prompt("Enter a second number:"));
percentOf();

//STEP 4
let firstModNumber;
let secondModNumber;

function findModulus() {
    const mod = firstModNumber % secondModNumber;
    window.document.write(mod + " is the modulus of " + firstModNumber + " and " + secondModNumber + ".<br>");
}

firstModNumber = parseFloat(window.prompt("STEP 4. The modulus of the two numbers. \nEnter a first number:"));
secondModNumber = parseFloat(window.prompt("Enter a second number:"));
findModulus();

//STEP 5
let firstCalcNumber;
let secondCalcNumber;
let thirdCalcNumber;

function calculate(numbers) {
    let base = Number(numbers), i;
    for (i = 1; i < arguments.length; i++) {
        base += Number(arguments[i]);
    }
    window.document.write("The sum of numbers " + firstCalcNumber + " , " + secondCalcNumber + " , " + thirdCalcNumber + " is " + base + ".");
}

firstCalcNumber = parseFloat(window.prompt("Enter enter first number:"));
secondCalcNumber = parseFloat(window.prompt("Enter enter second number:"));
thirdCalcNumber = parseFloat(window.prompt("Enter enter third number:"));
calculate(firstCalcNumber, secondCalcNumber, thirdCalcNumber);
