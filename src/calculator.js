class Calculator {
    aggregation(firstNumber, secondNumber) {
        if (!this.isNumber(firstNumber) || !this.isNumber(secondNumber)) {
            return "Error";
        }

        const result = firstNumber + secondNumber

        if (this.isFloat(firstNumber) || this.isFloat(secondNumber)) {
            return this.fixedPrecision(result);
        } else {
            return result;
        }
    }

    isNumber(number) {
        return typeof number == 'number';
    }

    isFloat(number) {
        return (number % 1) !== 0;
    }

    fixedPrecision( number ){
        return parseFloat(number.toFixed(3));
    }
}

module.exports = Calculator;