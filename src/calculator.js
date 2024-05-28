class Calculator {

        aggregation(firstNumber, secondNumber) {
            try {
                this.#validateNumbers(firstNumber, secondNumber)
                return this.#getResult(firstNumber + secondNumber)
            } catch (error) {
                return error.message
            }
        }

        subtraction(firstNumber, secondNumber) {
            try {
                this.#validateNumbers(firstNumber, secondNumber)
                return this.#getResult(firstNumber - secondNumber)
            } catch (error) {
                return error.message
            }

        }

        multiplication(firstNumber, secondNumber) {
            try {
                this.#validateNumbers(firstNumber, secondNumber)
                return this.#getResult(firstNumber * secondNumber)
            } catch (error) {
                return error.message
            }
        }

        division(firstNumber, secondNumber) {
            try {
                this.#validateNumbers(firstNumber, secondNumber)
                this.#isZeroDivision(secondNumber)
                return this.#getResult(firstNumber / secondNumber)
            } catch (error) {
                return error.message
            }
        }

        squareRoot(number) {
            try {
                this.#validateNumbers(number)
                this.#isLessThanZero(number)
                let initialValue = 600
                let result = 0

                if (number !== 0) {
                    result = this.#approximateSquareRoot(number, initialValue)
                }

                return this.#getResult(result)
            } catch (error) {
                return error.message
            }
        }

        exponential(number) {
            try {
                this.#validateNumbers(number)
                const isNegative = this.#isNegative(number)
                if (isNegative) {
                    number = -number
                }
                let result = this.#calculateExponential(number, isNegative)
                return this.#getResult(result)
            } catch (error) {
                return error.message
            }
        }

        #isZeroDivision(divisor) {
            if (divisor === 0) {
                throw new Error('Not possible')
            }
        }

        #approximateSquareRoot(number, previousApproximation) {
            let newApproximation = 0.5 * (previousApproximation + (number / previousApproximation))
            if (newApproximation.toFixed(3) === previousApproximation.toFixed(3)) {
                return newApproximation
            } else {
                return this.#approximateSquareRoot(number, newApproximation)
            }
        }

        #isLessThanZero(number) {
            if (this.#isNegative(number)) {
                throw new Error('Not possible')
            }
        }



        #calculateExponential(number, isNegative) {
            let sumOfSeries = 1.0
            let term = 1.0
            for (let n = 1; term > 1e-3; n++) {
                term *= number / n
                sumOfSeries += term
            }
            return isNegative ? 1.0 / sumOfSeries : sumOfSeries
        }

        #validateNumbers(...numbers) {
            const hasInvalidNumber = numbers.some(number => !this.#isNumber(number))
            if (hasInvalidNumber) {
                throw new Error('Invalid number')
            }
        }

        #isNegative(number) {
            return number < 0
        }

        #isNumber(number) {
            return typeof number == 'number'
        }

        #getResult(result) {
            if (this.#isFloat(result)) {
                return this.#fixedPrecision(result)
            } else {
                return result
            }
        }

        #isFloat(number) {
            return (number % 1) !== 0
        }

        #fixedPrecision(number) {
            return parseFloat(number.toFixed(3))
        }
}

//Export for browser
export { Calculator };

//Export for testing
// exports.Calculator= Calculator



