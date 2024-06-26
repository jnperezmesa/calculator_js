const {Given, When} = require('@cucumber/cucumber');
const Calculator = require('../../../scripts/calculator');

let calculator = new Calculator();

Given('squareRoot: a calculator', function () {
    calculator = new Calculator();
});

When('squareRoot: number is {string}', function (number) {
    this.actualAnswer = calculator.squareRoot(number);
});

When('squareRoot: number is {float}', function (number) {
    this.actualAnswer = calculator.squareRoot(number);
});
