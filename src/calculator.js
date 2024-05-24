class Calculator {
    aggregation(first_number, second_number) {

        if (typeof first_number == "string" || typeof second_number == "string") {
            return "Error"
        } else {
            return first_number + second_number;
        }
    }
}

module.exports = Calculator;