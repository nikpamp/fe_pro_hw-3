let quantityOfOperations = prompt('Quantity of operations:');

if (Number(quantityOfOperations) <= 0) {
    alert(`No actions needed...`);
} else {
    for (let i = 0; i < Number(quantityOfOperations); i++) {
        operand1 = prompt('Operand 1:');
        operator = prompt('Operator:');
        operand2 = prompt('Operand 2:');

        if (operator === '+') {
            result = Number(operand1) + Number(operand2);
            console.log(`Result: ${operand1} ${operator} ${operand2} = ${result}`);
        } else if (operator === '-') {
            result = Number(operand1) - Number(operand2);
            console.log(`Result: ${operand1} ${operator} ${operand2} = ${result}`);
        } else if (operator === '*') {
            result = Number(operand1) * Number(operand2);
            console.log(`Result: ${operand1} ${operator} ${operand2} = ${result}`);
        } else if (operator === '/') {
            result = Number(operand1) / Number(operand2);
            console.log(`Result: ${operand1} ${operator} ${operand2} = ${result}`);
        } else {
            alert(`This operator does not exist!`);
        }
    }
}