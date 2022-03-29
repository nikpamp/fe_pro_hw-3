let quantityOfOperations = +prompt('Quantity of operations:');

if (quantityOfOperations <= 0) {
    alert(`No actions needed...`);
} else {
    for (let i = 0; i < quantityOfOperations; i++) {
        let operand1 = +prompt('Operand 1:');
        let operator = prompt('Operator:');
        let operand2 = +prompt('Operand 2:');

        if (operator === '+') {
            let result = operand1 + operand2;
            console.log(`Result: ${operand1} ${operator} ${operand2} = ${result}`);
        } else if (operator === '-') {
            let result = operand1 - operand2;
            console.log(`Result: ${operand1} ${operator} ${operand2} = ${result}`);
        } else if (operator === '*') {
            let result = operand1 * operand2;
            console.log(`Result: ${operand1} ${operator} ${operand2} = ${result}`);
        } else if (operator === '/') {
            let result = operand1 / operand2;
            console.log(`Result: ${operand1} ${operator} ${operand2} = ${result}`);
        } else {
            alert(`This operator does not exist!`);
        }
    }
}