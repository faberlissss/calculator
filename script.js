let mathSymbol = prompt('Choose what you need: ' + ' add, sub, mult, div');
let firstNumber = Number(prompt('Enter the first number:'));
let secondNumber = Number(prompt('Enter second number:'));
if (mathSymbol === 'add') {
    let addResult = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${addResult}`);
} else if (mathSymbol === 'sub') {
    let subResult = firstNumber - secondNumber;
    alert(`${firstNumber} - ${secondNumber} = ${subResult}`);
} else if (mathSymbol === 'mult') {
    let multResult = firstNumber * secondNumber;
    alert(`${firstNumber} * ${secondNumber} = ${multResult}`);
} else if (mathSymbol === 'div') {
    let divResult = firstNumber / secondNumber;
    alert(`${firstNumber} / ${secondNumber} = ${divResult}`);  
}
