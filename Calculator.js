var clickSign;
var number1;
var result;

var display = document.getElementById('input');

var buttonsNumber = document.querySelectorAll('.number');

var buttonClear = document.querySelector('.delete');
buttonClear.addEventListener('click', displayClear);

var buttonsOperation = document.querySelectorAll('.operation');

var buttonsPercents = document.querySelector('.percents');
buttonsPercents.addEventListener('click', interestCalculation);

function interestCalculation() {
    number = parseFloat(display.value);
    result = (number1 / 100) * number;
    display.value = result;
}

var buttonPlusMinus = document.querySelector('.plus-minus');
buttonPlusMinus.addEventListener('click', plusMinusNum);

function plusMinusNum() {
    number = display.value
    var result = plusMinus(number);
    display.value = result;
};


var buttonResult = document.querySelector('.result');
buttonResult.addEventListener('click', operationResult);

for (var i = 0; i < buttonsNumber.length; i++) {
    buttonsNumber[i].addEventListener('click', enterNumber);
};

function enterNumber(e) {
    buttonClear.innerHTML = 'C';
    clickNumber = e.currentTarget.innerHTML;
    if (display.value === clickSign) {
        display.value = '';
    } else if (display.value === 'no number') {
        display.value = '';
    }
    display.value += clickNumber;
}

function displayClear() {
    display.value = '';
    buttonClear.innerHTML = 'AC';
};

for (var i = 0; i < buttonsOperation.length; i++) {
    operationBtn = buttonsOperation[i];
    buttonsOperation[i].addEventListener('click', signOperation);
};

function signOperation(e) {
    buttonClear.innerHTML = 'C';
    clickSign = e.currentTarget.innerHTML;
    number1 = parseFloat(display.value);
    display.value = clickSign;
};


function operationResult() {
    number2 = display.value;

    if (number2 === clickSign) {
        number2 = number1;
    }

    number2 = parseFloat(number2);

    if (clickSign === '+') {
        result = summa(number1, number2);
    } else if (clickSign === '-') {
        result = minus(number1, number2);
    } else if (clickSign === 'x') {
        result = multiply(number1, number2);
    } else if (clickSign === '/') {
        result = devide(number1, number2);
    } else {
        result = 'Error!'
    }
    display.value = result;
};