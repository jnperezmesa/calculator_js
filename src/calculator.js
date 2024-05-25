class Calculator {
    aggregation(firstNumber, secondNumber) {
        if (this.isNumber(firstNumber) && this.isNumber(secondNumber)) {
            return firstNumber + secondNumber;
        } else {
            return "Error"
        }
    }

    isNumber(number) {
        return typeof number == 'number';
    }
}

module.exports = Calculator;