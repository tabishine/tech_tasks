//калькулятор для астрономических чисел

function astronomicalNumbersSum(num1, num2) {
    const numberOne = num1.split('');
    const numberTwo = num2.split('');

    // выравниваем числа по длине 
    const maxLength = Math.max(numberOne.length, numberTwo.length);
    while (numberOne.length < maxLength) {
        numberOne.unshift('0');
    }
    while (numberTwo.length < maxLength) {
        numberTwo.unshift('0');
    }

    //сохраняем числа в новый массив 
    const result = [];
    let carry = 0;

    // арифметическое сложение столбиком
    for (let i = maxLength - 1; i >= 0; i--) {
        const digit1 = parseInt(numberOne[i]);
        const digit2 = parseInt(numberTwo[i]);
        const currentSum = digit1 + digit2 + carry;
        const resultDigit = currentSum % 10; 
        carry = Math.floor(currentSum / 10); 
        result.unshift(resultDigit.toString()); 
    }

    // в случае переноса не забываем добавить значение
    if (carry > 0) {
        result.unshift(carry.toString());
    }
    return result.join('');
}

const num1 = "10000068609304";
const num2 = "10000850683067";
const sumResult = astronomicalNumbersSum(num1, num2);
console.log("Ответ:", sumResult);
