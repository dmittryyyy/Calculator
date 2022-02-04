function summa(number1, number2) {
    var result = number1 + number2;
    return result;
};

function minus(number1, number2) {
    var result = number1 - number2;
    return result;
};

function multiply(number1, number2) {
    var result = number1 * number2;
    return result;
};

function devide(number1, number2) {
    var result = number1 / number2;
    return result;
};

function plusMinus(number) {
    if (number > 0) {
        number = -number;
    } else if (number < 0) {
        number = Math.abs(number);
    } else if (number === '') {
        number = 'no number';
    }
    return number;
};
