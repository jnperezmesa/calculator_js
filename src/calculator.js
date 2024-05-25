class Calculator {
    aggregation(firstNumber, secondNumber) {
        try {
            this.validateNumbers(firstNumber, secondNumber)
            return this.getResult(firstNumber + secondNumber)
        } catch (error) {
            return error.message
        }
    }

    subtraction(firstNumber, secondNumber) {
        try {
            this.validateNumbers(firstNumber, secondNumber)
            return this.getResult(firstNumber - secondNumber)
        } catch (error) {
            return error.message
        }

    }

    multiplication(firstNumber, secondNumber) {
        try {
            this.validateNumbers(firstNumber, secondNumber)
            return this.getResult(firstNumber * secondNumber)
        } catch (error) {
            return error.message
        }
    }

    division(firstNumber, secondNumber) {
        try {
            this.validateNumbers(firstNumber, secondNumber)
            this.isZeroDivision(secondNumber)
            return this.getResult(firstNumber / secondNumber)
        } catch (error) {
            return error.message
        }
    }

    isZeroDivision(divisor) {
        if (divisor === 0) {
            throw new Error('Not possible');
        }
    }

    validateNumbers(...numbers) {
        const hasInvalidNumber = numbers.some(number => !this.isNumber(number));
        if (hasInvalidNumber) {
            throw new Error('Invalid number');
        }
    }

    isNumber(number) {
        return typeof number == 'number'
    }

    getResult(result){
         if (this.isFloat(result)) {
            return this.fixedPrecision(result)
        } else {
            return result
        }
    }

    isFloat(number) {
        return (number % 1) !== 0
    }

    fixedPrecision( number ){
        return parseFloat(number.toFixed(3))
    }
}

module.exports = Calculator